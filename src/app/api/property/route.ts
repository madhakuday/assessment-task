/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDB from "@/lib/db";
import Property from "@/Modal/Property";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const query: any = {};

    const keyword = searchParams.get("search");
    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { "location.city": { $regex: keyword, $options: "i" } },
        { "location.postalCode": { $regex: keyword, $options: "i" } },
        { "location.area": { $regex: keyword, $options: "i" } },
      ];
    }

    const listingType = searchParams.get("listingType");
    if (listingType) {
      query["details.listingType"] = listingType;
    }

    const type = searchParams.get("type");
    if (type) {
      query["type"] = type;
    }

    const minPrice = parseFloat(searchParams.get("minPrice") || "0");
    const maxPrice = parseFloat(searchParams.get("maxPrice") || "0");
    if (minPrice || maxPrice) {
      query["details.price_eur"] = {};
      if (minPrice) query["details.price_eur"].$gte = minPrice;
      if (maxPrice) query["details.price_eur"].$lte = maxPrice;
    }

    const minSize = parseFloat(searchParams.get("minSize") || "0");
    const maxSize = parseFloat(searchParams.get("maxSize") || "0");
    if (minSize || maxSize) {
      query["details.size_m2"] = {};
      if (minSize) query["details.size_m2"].$gte = minSize;
      if (maxSize) query["details.size_m2"].$lte = maxSize;
    }

    const minRooms = parseInt(searchParams.get("minRooms") || "0");
    const maxRooms = parseInt(searchParams.get("maxRooms") || "0");
    if (minRooms || maxRooms) {
      query["details.rooms"] = {};
      if (minRooms) query["details.rooms"].$gte = minRooms;
      if (maxRooms) query["details.rooms"].$lte = maxRooms;
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "1");
    const skip = (page - 1) * limit;

    const [results, total] = await Promise.all([
      Property.find(query).skip(skip).limit(limit),
      Property.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json(
      {
        properties: results,
        pagination: {
          total,
          totalPages,
          currentPage: page,
          limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/property error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { title, type, imageUrl, location, details } = body;

    if (
      !title ||
      !type ||
      !imageUrl ||
      !location?.city ||
      !location?.postalCode ||
      !location?.country ||
      !details?.rooms ||
      !details?.bathrooms ||
      !details?.size_m2 ||
      !details?.listingType ||
      !details?.price_eur
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await Property.create(body);

    return NextResponse.json(
      { message: "Property created successfully", property: response },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
