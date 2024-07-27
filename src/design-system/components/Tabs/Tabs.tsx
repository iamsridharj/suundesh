import React, { useState, useRef, ReactNode, RefObject } from 'react';
import "./Tabs.css"

interface TabHeader {
    key: string;
    label: string;
}

interface TabContent {
    key: string;
    component: ReactNode;
}

interface TabsProps {
    tabHeaders: TabHeader[];
    tabContents: TabContent[];
}

const Tabs: React.FC<TabsProps> = ({ tabHeaders, tabContents }) => {
    const [activeTab, setActiveTab] = useState<string>(tabHeaders[0].key);
    const refs = useRef<Record<string, RefObject<HTMLDivElement>>>(
        tabHeaders.reduce((acc, value) => {
            acc[value.key] = React.createRef<HTMLDivElement>();
            return acc;
        }, {} as Record<string, RefObject<HTMLDivElement>>)
    );

    const handleTabClick = (tabKey: string) => {
        setActiveTab(tabKey);
        refs.current[tabKey].current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="tab-menu">
                {tabHeaders.map((tab) => (
                    <button
                        key={tab.key}
                        className={`tab-link ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabContents.map((content) => (
                    <div
                        key={content.key}
                        className={`tab-pane ${activeTab === content.key ? 'active' : ''}`}
                        ref={refs.current[content.key]}
                    >
                        {content.component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
