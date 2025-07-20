const trimText = (text: string, limit: number = 30) => {
  return text && text.length > limit ? `${text.trim().slice(0, limit)}...` : text;
};

export { trimText };
