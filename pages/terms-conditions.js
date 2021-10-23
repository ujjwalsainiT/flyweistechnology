import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

class TermsConditions extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="blog_img_banner">
          <img src="/images/terms_and_condition.png" alt=""  className="native_image_height"/>
        </div>
        {/* <PageBanner 
                    pageTitle="Terms & Conditions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Terms & Conditions" 
                />  */}

        <div className="text-container ptb-100">
          <div className="container">
            <h3>Terms & Conditions</h3>

            <p>
              As a Client of FLYWEIS TECHNOLOGY, you need to be aware that, when
              signing up for an account with FLYWEIS TECHNOLOGY, you accept and
              agree to abide by our Web Designing Terms of Service.
            </p>
            <p>
              1.The client’s approval for work to commence shall be deemed a
              contractual agreement between the client and FLYWEIS TECHNOLOGY.
            </p>

            <p>
              2.Domain and Hosting renewal fee will be charged every year. If
              the client wants to move/ transfer his domain/services to another
              company should ask for secure code in written or by email before
              the 30 days of expiration of domain. Secure Code/ EPP Code will be
              provided to the client by the company free of cost
            </p>

            <p>
              3.Payment of the balance is due immediately on completion of the
              website. We reserve the right not to launch a website until full
              payment has been received.
            </p>

            <p>
              4.After work on a website commences advances are not refundable.
            </p>

            <p>
              5.Your website will be handed over as a fully functioning,
              completed work. Your website is offered as a single contract and
              no guarantee of the availability of future support from FLYWEIS
              TECHNOLOGY is offered unless an ongoing support package has been
              agreed.
            </p>

            <p>
              6.Problems caused by malicious software, spyware, viruses and
              website hacking are a fact of life on today’s Internet. It is
              highly unlikely that these will affect your website, and FLYWEIS
              TECHNOLOGY will endeavour to protect it from this as much as we
              can during its creation, but after the website is handed over we
              cannot be held responsible for problems caused by illegal activity
              or the actions of others.
            </p>

            <p>
              7.cPanel (with Login details) will be handed over to client on
              request, After handover the cPanel to client company we cannot be
              held responsible for any changes made to the website by the client
              or the client’s agents.
            </p>

            <p>
              8.We design websites in accordance with the client’s
              specifications. It is the client’s responsibility to ensure that
              the website and its content comply with current online trading
              laws and regulations. We cannot accept responsibility for any
              failure to comply with laws and regulations related to
              accessibility, selling online or those related to a specific
              business or trade. We can research this on the client’s behalf
              upon request, but in any business where complex compliance issues
              may exist we recommend that the client takes legal advice from
              their company lawyer.
            </p>

            <p>
              9.The client represents to FLYWEIS TECHNOLOGY that all elements of
              text, graphics, photos, designs, trademarks, or other artwork
              furnished FLYWEIS TECHNOLOGY for inclusion in Web pages are owned
              by the client, or that the client has permission from the rightful
              owner to use each of these elements, and will hold harmless,
              protect, and defend FLYWEIS TECHNOLOGY from any claim or suit
              arising from the use of such elements furnished by the client.
            </p>

            <p>
              FLYWEIS TECHNOLOGY reserves the right to amend any or all of the
              above policies, guidelines and disclaimer without any
              notification.Company & All subjects to Delhi Jurisdiction Only
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default TermsConditions;
