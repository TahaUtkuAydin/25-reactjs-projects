import { useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";
import FeatureFlag from "..";

export default function FeatureFlagGlobalState() {
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlag() {
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(()=>{
    fetchFeatureFlag()
  },[])
  console.log(enabledFlags);

  return <div>
    <FeatureFlag enabledFlags={enabledFlags} />
  </div>;
}
