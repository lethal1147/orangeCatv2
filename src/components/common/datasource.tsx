/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { withAsync } from "@/utils";

interface DatasourceProps {
  fn?: () => Promise<any | AxiosResponse<any, any>>;
  resouceName: string;
  render: (resouce: any) => ReactElement<any, any>;
}

export default function Datasource({
  fn,
  render,
  resouceName,
}: DatasourceProps) {
  const [resouce, setResouce] = useState(null);

  useEffect(() => {
    (async () => {
      if (!fn) {
        return;
      }
      const { response, error } = await withAsync(() => fn());
      if (error) throw new Error("Failed to get data.");
      setResouce(response[resouceName]);
    })();
  }, []);
  return render(resouce);
}
