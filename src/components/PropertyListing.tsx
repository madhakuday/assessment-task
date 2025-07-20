"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IObjectType } from "@/lib/types";
import { Skeleton, Pagination, Filters, Card } from "@/components";

const itemsPerPage = 9;

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [total, steTotal] = useState(0);
  const [query, setQuery] = useState<IObjectType>({
    limit: itemsPerPage,
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/property", {
        params: query,
      });

      setProperties(data.properties);
      steTotal(data.pagination.total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setQuery({
      ...query,
      page: page,
    });
  }, [page]);

  return (
    <div>
      <Filters query={query} setQuery={setQuery} />

      <div className="grid lg:grid-cols-3 place-items-center sm:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:px-3">
        {loading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="h-96 w-full" key={item}>
                <Skeleton />
              </div>
            ))}
          </>
        ) : !loading && properties.length ? (
          properties.map((card, index) => <Card key={index} data={card} />)
        ) : (
          <div className="col-span-full flex justify-center w-full font-bold">
            No Properties found...
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-24">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalData={total}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default PropertyListing;
