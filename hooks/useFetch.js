import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const request = async ({
  endpoint,
  query,
  requestBody,
  token = null,
  method = "GET",
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const headers = token ? { Authorization: `Token ${token}` } : null;
  const params = query ? { ...query } : null;
  requestBody = requestBody ?? null;

  const options = {
    method: method,
    url: `${BASE_URL}${endpoint}`,
    headers: headers,
    params: params,
    data: requestBody,
  };

  setIsLoading(true);
  try {
    const response = await axios(options);
    setData(response.data);
  } catch (err) {
    setError(true);
  } finally {
    setIsLoading(false);
  }

  const refetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(options);
      setData(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refetchData };
};

export default request;
