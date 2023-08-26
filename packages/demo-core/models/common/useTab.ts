import { useState } from "react";

export default function useTab<T>(list: T[], defaultActiveTabIndex: number = 0) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);
  const activeTabItem = list[activeTabIndex];
  return { activeTabItem, activeTabIndex, setActiveTabIndex };
}
