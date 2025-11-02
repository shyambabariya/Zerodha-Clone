import React from "react";
import { useState } from "react";

function CreateTicket() {
  const [openIndex, setOpenIndex] = useState(null);

  const dropdowns = [
    {
      icon: "fa-solid fa-circle-plus",
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company",
        "Partnership",
        "HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa-solid fa-circle-user",
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Support",
      items: ["FAQs", "Contact Us", "Downloads", "Help Desk"],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5" style={{ width: "80%" }}>
      <div className="row">
        <div className="col-8 p-3">
          {dropdowns.map((section, index) => (
            <div key={index} className="mb-3">
              {/* Header */}
              <div
                className="d-flex justify-content-between align-items-center border rounded-3 px-3 py-3 bg-light"
                style={{ cursor: "pointer" }}
                onClick={() => toggleDropdown(index)}
              >
                {/* Left side: + icon and title */}
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      color: "#397DD0",
                      fontSize: "1.3rem",
                    }}
                  >
                    <i className={section.icon}></i>
                  </div>
                  <span className="fw-semibold fs-5">{section.title}</span>
                </div>

                {/* Right side: caret icon */}
                <i
                  className={`fa-solid fa-caret-${
                    openIndex === index ? "up" : "down"
                  } fs-4`}
                  style={{ transition: "transform 0.3s ease" }}
                ></i>
              </div>

              {/* Dropdown Content */}
              <div
                className="overflow-hidden border rounded-bottom"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "all 0.4s ease",
                  borderTop: openIndex === index ? "1px solid #ddd" : "none",
                }}
              >
                <ul className="list-styled m-0">
                  {section.items.map((item, i) => (
                   <a href=""><li key={i} className="py-2">
                      {item}
                    </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="col-4 p-3">
          <div
            className="p-3"
            style={{
              backgroundColor: "oklab(0.758619 0.0867545 0.154104/0.1)",
              borderLeft: "10px solid orange",
            }}
          >
            <ul style={{ color: "#397DD0", textDecoration: "underline" }}>
              <li className="mt-3">
                <a href="">Delay in commodity (MCX) market open</a>
              </li>
              <li className="mt-3">
                <a href="">Surveillance measure on scrips - October 2025</a>
              </li>
            </ul>
          </div>
          <div class="list-group mt-4">
            <a href="#" class="list-group-item bg-light" aria-current="true">
              Quick links
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              1. Track account opening
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              2. Track segment activation
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              3. Intraday margins
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              4. Kite user manual
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              5. Learn how to create a ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
