import { useState, useEffect } from 'react';

interface TabData {
  tabHeaders: { key: string; label: string }[];
  tabContents: { key: string; component: React.ReactNode }[];
}

const useTabsData = (eventData: any): TabData => {
  const [tabData, setTabData] = useState<TabData>({
    tabHeaders: [],
    tabContents: [],
  });

  useEffect(() => {
    if (!eventData) return
    const {
      description,
      speaker_section_title,
      speaker_section_description,
      sponsor_section_title,
      sponsor_section_description,
      workshop_section_title,
      workshop_section_description
    } = eventData;

    const tabHeaders = [
      { key: 'about', label: 'About' },
      { key: 'speakers', label: speaker_section_title },
      { key: 'sponsors', label: sponsor_section_title },
      { key: 'workshops', label: workshop_section_title },
    ];

    const tabContents = [
      {
        key: 'about',
        component: (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        ),
      },
      {
        key: 'speakers',
        component: (
          <div dangerouslySetInnerHTML={{ __html: speaker_section_description }} />
        ),
      },
      {
        key: 'sponsors',
        component: (
          <div dangerouslySetInnerHTML={{ __html: sponsor_section_description }} />
        ),
      },
      {
        key: 'workshops',
        component: (
          <div dangerouslySetInnerHTML={{ __html: workshop_section_description }} />
        ),
      },
    ];

    setTabData({ tabHeaders, tabContents });
  }, [eventData]);

  return tabData;
};

export default useTabsData;
