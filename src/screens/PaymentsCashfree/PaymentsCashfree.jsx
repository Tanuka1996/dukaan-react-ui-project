import React from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Divider } from "../../components/Divider";
import { InputSearchBox } from "../../components/InputSearchBox";
import { Navbar } from "../../components/Navbar";
import { PaginationWrapper } from "../../components/PaginationWrapper";
import { TableType } from "../../components/TableType";
import { BoldChevronDown16 } from "../../icons/BoldChevronDown16";
import { NavbarIcon130 } from "../../icons/NavbarIcon130";
import { NavbarIcon172 } from "../../icons/NavbarIcon172";
import { NavbarIcon179 } from "../../icons/NavbarIcon179";
import { NavbarIcon181 } from "../../icons/NavbarIcon181";
import { NavbarIcon185 } from "../../icons/NavbarIcon185";
import { NavbarIcon186 } from "../../icons/NavbarIcon186";
import { NavbarIcon196 } from "../../icons/NavbarIcon196";
import { NavbarIcon210 } from "../../icons/NavbarIcon210";
import { NavbarIcon61 } from "../../icons/NavbarIcon61";
import { NavbarIcon65 } from "../../icons/NavbarIcon65";
import { NavbarIcon68 } from "../../icons/NavbarIcon68";
import { NavbarIcon90 } from "../../icons/NavbarIcon90";
import { OutlinedHelp1 } from "../../icons/OutlinedHelp1";
import { OutlinedInfo1 } from "../../icons/OutlinedInfo1";
import { OutlinedSort } from "../../icons/OutlinedSort";
import { TriangleIcon } from "../../icons/TriangleIcon";
import "./style.css";

export const PaymentsCashfree = () => {
  return (
    <div className="payments-cashfree">
      <div className="div-2">
        <DashboardHeader
          backArrow={false}
          beta={false}
          button={false}
          className="dashboard-header-instance"
          descriptionText={false}
          divClassName="dashboard-header-2"
          help
          howToUseDivClassName="dashboard-header-3"
          howToUseIcon={<OutlinedHelp1 className="icon-instance-node-2" />}
          howToUseText="How it works"
          iconsSearch="/img/icons-search-2.svg"
          placeholderTextClassName="design-component-instance-node-2"
          screenWidth="full"
          searchBox
          text="Payments"
        />
        <div className="frame-15">
          <div className="frame-16">
            <div className="frame-17">
              <div className="frame-18">
                <div className="text-wrapper-16">Overview</div>
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="text-wrapper-17">Last Month</div>
                      <BoldChevronDown16 className="icons-arrow" color="#4D4D4D" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-19">
              <div className="frame-wrapper">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="frame-22">
                      <div className="text-wrapper-18">Online orders</div>
                    </div>
                    <div className="text-wrapper-19">231</div>
                  </div>
                </div>
              </div>
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="text-wrapper-18">Amount received</div>
                  </div>
                  <div className="frame-23">
                    <div className="frame-24">
                      <div className="text-wrapper-20">₹23,92,312.19</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-25">
            <div className="text-wrapper-21">Transactions | This Month</div>
            <div className="template">
              <div className="frame-26" />
              <div className="frame-27">
                <div className="frame-18">
                  <InputSearchBox
                    baseSearchFieldDivClassName="input-search-box-2"
                    baseSearchFieldText="Search by order ID..."
                    className="input-search-box-instance"
                    size="default"
                    type="default"
                  />
                  <div className="frame-28">
                    <div className="frame-28">
                      <div className="frame-29">
                        <div className="frame-28">
                          <button className="button-sort">
                            <div className="text-wrapper-18">Sort</div>
                            <OutlinedSort className="outlined-sort" />
                          </button>
                        </div>
                        <img className="group-2" alt="Group" src="/img/group-898.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <header className="header">
                  <div className="cell-header-row">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-3"
                        divClassName="table-type-instance"
                        text="Order ID"
                        type="text-medium"
                      />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-3"
                        divClassName="table-type-instance"
                        text="Order date"
                        type="text-medium"
                      />
                      <TriangleIcon className="triangle-icon" />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row-2">
                    <div className="text-icon">
                      <TableType
                        className="design-component-instance-node-3"
                        divClassName="table-type-2"
                        text="Order amount"
                        type="text-medium"
                      />
                    </div>
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="cell-header-row-3">
                    <div className="resizable-spacer-2">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                    <div className="frame-30">
                      <div className="text-icon">
                        <TableType
                          className="design-component-instance-node-3"
                          divClassName="table-type-2"
                          text="Transaction fees"
                          type="text-medium"
                        />
                      </div>
                      <OutlinedInfo1 className="icon-instance-node-2" />
                    </div>
                  </div>
                </header>
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="data-table">
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassNameOverride="table-type-instance"
                    text="#281209"
                    type="link"
                  />
                  <div className="resizable-spacer-3">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-3"
                    text="7 July, 2023"
                    type="text-regular"
                  />
                  <div className="resizable-spacer-4">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹1,278.23"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <div className="column-2">
                  <TableType
                    className="design-component-instance-node-3"
                    divClassName="table-type-4"
                    text="₹22"
                    type="text-regular"
                  />
                  <div className="resizable-spacer">
                    <div className="end-point" />
                    <div className="end-point-2" />
                  </div>
                </div>
                <Divider className="divider-instance" stroke="black-90" />
              </div>
              <div className="frame-31">
                <div className="data-table">
                  <div className="column">
                    <TableType
                      className="design-component-instance-node-3"
                      divClassNameOverride="table-type-instance"
                      text="#281209"
                      type="link"
                    />
                    <div className="resizable-spacer-3">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column">
                    <TableType
                      className="design-component-instance-node-3"
                      divClassName="table-type-3"
                      text="7 July, 2023"
                      type="text-regular"
                    />
                    <div className="resizable-spacer-4">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column-2">
                    <TableType
                      className="design-component-instance-node-3"
                      divClassName="table-type-4"
                      text="₹1,278.23"
                      type="text-regular"
                    />
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <div className="column-2">
                    <TableType
                      className="design-component-instance-node-3"
                      divClassName="table-type-4"
                      text="₹22"
                      type="text-regular"
                    />
                    <div className="resizable-spacer">
                      <div className="end-point" />
                      <div className="end-point-2" />
                    </div>
                  </div>
                  <Divider className="divider-instance" stroke="black-90" />
                </div>
                <div className="frame-32">
                  <div className="frame-32">
                    <div className="frame-32">
                      <div className="frame-31">
                        <PaginationWrapper className="design-component-instance-node-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar
          baseNavigationBarBaseNavBottomOutlineWalletWallet="/img/wallet-18.svg"
          baseNavigationBarBaseNavButtonIcon={<NavbarIcon179 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon1={<NavbarIcon196 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon10={<NavbarIcon65 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon2={<NavbarIcon210 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon3={<NavbarIcon61 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon4={<NavbarIcon172 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon5={<NavbarIcon186 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon6={<NavbarIcon181 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon7={<NavbarIcon90 className="navbar-icon-4" color="white" />}
          baseNavigationBarBaseNavButtonIcon8={<NavbarIcon68 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonIcon9={<NavbarIcon130 className="navbar-icon-4" />}
          baseNavigationBarBaseNavButtonText="Payments"
          baseNavigationBarDivClassName="design-component-instance-node-2"
          className="navbar-instance"
          navbar="payouts"
          override={<NavbarIcon185 className="navbar-icon-4" />}
        />
      </div>
    </div>
  );
};
