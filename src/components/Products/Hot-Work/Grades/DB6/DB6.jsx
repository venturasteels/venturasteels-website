import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./DB6.css";

export default function DB6() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "DB6 / 2714 / AISI L6",
        selectedProduct: "Hot Work Steel",
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>
          DB6 / DIN 2714 / AISI L6 | Hot Work Tool Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="DB6 / DIN 2714 (AISI L6) Hot Work Tool Steel with high toughness, wear resistance and impact strength. Chemical composition, heat treatment, applications, size range and properties. Ventura Alloy & Steels is a leading supplier of DB6 steel in India."
        />

        <meta
          name="keywords"
          content="DB6 steel, DIN 2714, AISI L6, DB6 chemical composition, DB6 heat treatment, hot work tool steel, Ventura Alloy and Steels, die steel DB6"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel/db6"
        />

        {/* FAQ Schema for SEO Rich Results */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is DB6 / DIN 2714 steel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DB6 or DIN 2714 is a highly tough hot work tool steel used for forging dies, hammer dies, mould applications, and hot work tooling. It offers excellent impact resistance and wear resistance."
            }
          },
          {
            "@type": "Question",
            "name": "What is the chemical composition of DB6 steel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typical composition: 0.50–0.60% C, 1.00–1.20% Cr, 1.50–1.80% Ni, 0.45–0.55% Mo, 0.65–0.95% Mn, and 0.07–0.12% V."
            }
          }
        ]
      }
    `}
        </script>
      </Helmet>

      <div className="grade-details">
        <h1 className="text-center">
          <strong>DB6 / DIN 2714 </strong> / AISI L6
        </h1>
        <p className="subtitle text-center">
          Premium Hot Work Tool Steel with high toughness & wear resistance.
        </p>
        {/* standards  */}
        <div className="hot-work-standards-scroll-wrapper mb-4">
          <div className="hot-work-standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>COUNTRY </strong>
                  </td>
                  <td>India</td>
                  <td>Europe</td>
                  <td>Germany</td>
                  <td>USA</td>
                  <td>France</td>
                  <td>Japan</td>
                  <td>UK</td>
                  <td>China</td>
                  <td>Russia</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>IS</td>
                  <td>En</td>
                  <td>DIN / WNr</td>
                  <td>AISI</td>
                  <td>AFNOR</td>
                  <td>JIS</td>
                  <td>BS</td>
                  <td>GB</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>
                    DB6 or directly <br /> as 55CrNiMoV7
                  </td>
                  <td>55NiCrMoV7</td>
                  <td>1.2714 / X38CrMoV5-1</td>
                  <td>L6</td>
                  <td>55NCDV7</td>
                  <td>SKT4</td>
                  <td>BH224-5</td>
                  <td>5CrNiMo</td>
                  <td>5KHNM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
          <div className="overview-content">
            <p>
              Ventura Alloy and Steels Stocks and Supplies Die Block Steel DB6 /
              DIN 2714 in India and abroad. DB6 tool steel is an extreme pass on
              steel with high treating resistance and great through-solidifying
              properties. Its nickel substance has it uncommonly effect safe – a
              highly recommendable element for vast mallet & press bites the
              dust alike. This evaluation is generally supplied in toughened
              condition or extinguished and tempered to 1300 N/mm² & a working
              hardness of 370 to 410 HB (round) or 355 to 400 HB (square,
              level).
            </p>
            <p>
              Utilized as standard die block steel for manufacturing passes on
              of different kinds, press bites the dust, expulsion kicks the
              bucket, retainer plates, heavily clad trim bites the dust, hot
              shear sharpened pieces of steels and instrument holder.
            </p>
          </div>
          <div className="db6-img">
            <img
              src="/image/Hot Work Tool Steels/Hot Work Steel DB 6 Block.png"
              alt="DB6 Hot Work Tool Steel Block"
              loading="lazy"
              width={350}
            />
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="db6-composition">
          <h2 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h2>
          <div className="table-data d-flex justify-content-center">
            <div className="db6-chemical-composition db6-composition-table table-responsive-custom">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>C</th>
                    <th>Mn</th>
                    <th>Si</th>
                    <th>Cr</th>
                    <th>P</th>
                    <th>S</th>
                    <th>Mo</th>
                    <th>Ni</th>
                    <th>V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.50 – 0.60</td>
                    <td>0.65 – 0.95</td>
                    <td>0.10 – 0.40</td>
                    <td>1.00 – 1.20</td>
                    <td>Max 0.03</td>
                    <td>Max 0.03</td>
                    <td>0.45 – 0.55</td>
                    <td>1.50 – 1.80</td>
                    <td>0.07 – 0.12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* size range */}
        <section className="size-range">
          <h2>Size Range</h2>
          <table className="size-table">
            <thead>
              <tr>
                <th>Shape</th>
                <th>Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rounds</td>
                <td>Diameter: 102 - 710 mm</td>
              </tr>
              <tr>
                <td>Blocks</td>
                <td>
                  Thickness: 125 – 1000 mm
                  <br />
                  Width: 130 – 1600 mm
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* process route */}
        <section className="process-route mx-auto mt-3">
          <h2>Process Route</h2>
          <p className="text-muted text-center">
            Applicable for <strong>DB6 / DIN 2714 / AISI L6</strong>
          </p>
          <div className="process-flow">
            <div className="step">EAF</div>
            <span className="arrow">→</span>
            <div className="step">LF</div>
            <span className="arrow">→</span>
            <div className="step">VD</div>
            <span className="arrow">→</span>
            <div className="step">UPSET</div>
            <span className="arrow">→</span>
            <div className="step">FORGED</div>
            <span className="arrow">→</span>
            <div className="step">ANNEALED</div>
            <span className="arrow">→</span>
            <div className="step">
              ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS
            </div>
            <span className="arrow">→</span>
            <div className="step">OIL QUENCHED</div>
            <span className="arrow">→</span>
            <div className="step">DOUBLE TEMPERED</div>
            <span className="arrow">→</span>
            <div className="step">
              ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS
            </div>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>Steel Properties</h2>
          <p>
            The exceptional hot work pre-solidified tool steel has great
            toughness and high wear resistance. DB6 die steel is generally
            provided in hard, quenched, tempered, and annealed condition, and in
            strengthened condition in exceptional cases. Normally its working
            hardness is
            <strong> 360–430 BHN</strong>. This steel grade is the updated type
            of DIN 2713 for higher efficiency and performance.
          </p>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            Dies for specially drop and close die forgings for hammers &
            mechanical presses, die moulds, shoe blocks, die holder, piston
            rods, bolster, cranks, cassettes, plastic moulds, shearing blades,
            tools, etc.
          </p>
        </section>

        {/* Thermal properties */}
        <section className="hotwork-thermal-properties">
          <h2 className="thermal-section-title">Thermal Properties</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="property-card mb-3">
                <h4>Coefficient of Thermal Expansion</h4>
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Temperature (°C)</th>
                      <th>10¯⁶ m / (m*K)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20-100</td>
                      <td>12.1</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>13.1</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>13.2</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>13.5</td>
                    </tr>
                    <tr>
                      <td>20-500</td>
                      <td>14.1</td>
                    </tr>
                    <tr>
                      <td>20-600</td>
                      <td>14.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-6">
              <div className="property-card mb-3">
                <h4>Thermal Conductivity</h4>
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Temperature (°C)</th>
                      <th>W / (m*K)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20</td>
                      <td>35.0</td>
                    </tr>
                    <tr>
                      <td>350</td>
                      <td>39.0</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>36.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* heat treatment */}
        <section className="heat-treatment">
          <h2 className="section-title">Heat Treatment</h2>

          <div className="row">
            {/* Basic Heat Treatment Data */}
            <div className="col-md-6">
              <div className="heat-card mb-3">
                <h4>Heat Treatment Steps</h4>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Soft Annealing °C</th>
                      <td>650-710</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>max. 240</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>840-880 / 860-900</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Oil / Air</td>
                    </tr>
                    <tr>
                      <th>Hardness after Quenching HRC</th>
                      <td>57 / 55</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tempering Data */}
            <div className="col-md-6">
              <div className="heat-card mb-3">
                <h4>Tempering (°C after quenching)</h4>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Temp (°C)</th>
                      <th>In Oil – HRC</th>
                      <th>In Air – HRC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100</td>
                      <td>56</td>
                      <td>54</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>54</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>52</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>49</td>
                      <td>47</td>
                    </tr>
                    <tr>
                      <td>450</td>
                      <td>47</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>46</td>
                      <td>43</td>
                    </tr>
                    <tr>
                      <td>550</td>
                      <td>43</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>38</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>650</td>
                      <td>34</td>
                      <td>32</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* stocking partner */}
        <section className="stocking-partners py-5">
          <div className="container text-center">
            <h2 className="section-title mb-4">Stocking Partners</h2>
            <p className="lead">
              We keep the materials from <strong>India</strong>,
              <strong> China</strong> and <strong>Europe</strong>.
            </p>
            <div className="partner-flags mt-4">
              <img
                src="/image/india-flag.png"
                alt="India Flag"
                className="flag-img mx-3"
              />
              <img
                src="/image/china-flag.png"
                alt="China"
                className="flag-img mx-3"
              />
              <img
                src="/image/europe-flag.jpeg"
                alt="Europe Flag"
                className="flag-img mx-3"
              />
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability</h4>
            <p>
              <strong>Grades in Bold (e.g. DB6 / DIN 2714 )</strong> are kept in
              stock and supplied on a regular basis. <br />
              For other grades, we accept <strong>advance orders</strong> on MOQ
              basis as per size requirements.
            </p>
            <div className="note-box mt-3 p-3 rounded">
              <h5 className="note-title">Additional Services</h5>
              <p>
                We also source forgings as per the required grades, size, and
                supply specifications. Additionally, we have an in-house cutting
                facility to meet customized requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Get Quote CTA */}
        <div className="cta-block">
          <button onClick={handleEnquiryClick} className="btn btn-primary mt-3">
            Enquire Now
          </button>
          <span>MOQ: 0.33 Tonnes</span>
        </div>
      </div>
      <p className="text-center fs-4">
        Explore more Hot Work Tool Steel grades like
        <Link
          to="/products/hot-work-steel/h13"
          className="text-decoration-none text-muted"
        >
          {" "}
          H13
        </Link>
        ,
        <Link
          to="/products/hot-work-steel/h21"
          className="text-decoration-none text-muted"
        >
          {" "}
          H21
        </Link>
        .
      </p>
    </>
  );
}
