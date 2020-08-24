import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrice from "./tabs_nav/TabPrice";
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import "../css/TabsNav.css";

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <div>
        <Tabs className="tabs" selectedIndex={this.state.tabIndex} 
          onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? "tab-selected active" : null}`}>
              <TabDoor />
              <p className="lgScreen" style={{marginBottom:'1.875rem'}}>
                <strong>
                  Assista quando quiser.
                  <br />
                  Cancele quando quiser.
                </strong>
              </p>
              <span className="mdScreen" style={{marginTop: '0.4rem'}}>Cancele</span>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? "tab-selected active" : null}`}>
              <TabDevices />
              <p className="lgScreen" style={{ marginTop: "-5.3125rem" }}>
                <strong>Aproveite na TV.</strong>
              </p>
              <span className="mdScreen" style={{marginTop: "-5.3125rem" }}>Dispositivos</span>
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? "tab-selected active" : null}`}>
              <TabPrice />
              <p className="lgScreen">
                <strong>Baixe séries para assistir offline.</strong>
              </p>
              <br/>
              <span className="mdScreen" style={{}}>Preços</span>
            </Tab>
          </TabList>
        <TabPanel>
        <TabContentOne />
        </TabPanel>
        
        <TabPanel>
        <TabContentTwo/>
        </TabPanel>

        <TabPanel>
        <TabContentThree/>
        </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
