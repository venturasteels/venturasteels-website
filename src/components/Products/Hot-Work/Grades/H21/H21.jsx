gimport React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function H21() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "H21 / AISI H21 / DIN 1.2581",
        selectedProduct: "Hot Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          H21 / AISI H21 / DIN 1.2581 | Hot Work Tool Steel | Ventura Alloy &
          Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="H21 / AISI H21 / DIN 1.2581 Hot Work Tool Steel known for high hot strength, excellent wear resistance and thermal stability. View chemical composition, heat treatment, hardness, applications and availability. Ventura Alloy & Steels is a trusted supplier of H21 steel in India."
        />

        <meta
          name="keywords"
          content="H21 steel, AISI H21, DIN 1.2581, H21 tool steel, hot work tool steel H21, tungsten hot work steel, H21 chemical composition, H21 heat treatment, H21 hardness, H21 datasheet, H21 steel supplier India, 1.2581 steel, hot work die steel H21, H21 round bar, H21 flats, H21 blocks, forging steel H21"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/hot-work-steel/h21"
        />

        {/* Product Schema for SEO */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "H21 Hot Work Tool Steel",
  "description": "H21 / AISI H21 / DIN 1.2581 hot work tool steel with high hot strength, wear resistance and thermal stability, suitable for die casting and hot forming applications.",
  "brand": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "material": "Hot Work Tool Steel",
  "url": "https://venturasteels.com/products/hot-work-steel/h21",
  "additionalProperty": [
  {
    "@type": "PropertyValue",
    "name": "Material Grade",
    "value": "H21 / 1.2581"
  },
  {
    "@type": "PropertyValue",
    "name": "Form",
    "value": "Round"
  }
]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center"> H21 / AISI H21 / DIN 1.2581 </h2>
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
                  <td>USA</td>
                  <td>Germany</td>
                  <td>Japan</td>
                  <td>China</td>
                  <td>UK</td>
                  <td>France</td>
                  <td>Russia</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>ASTM</td>
                  <td>DIN / W.Nr.</td>
                  <td>JIS</td>
                  <td>GB</td>
                  <td>BS</td>
                  <td>AFNOR</td>
                  <td>GOST</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>H21</td>
                  <td>1.2581 or X30WCrV9-3</td>
                  <td>SKD5</td>
                  <td>3Cr2W8V</td>
                  <td>BH21</td>
                  <td>Z30WCrV9</td>
                  <td>3Kh2V8F</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
          <div className="overview-content ">
            <p>
              H21 Steel is a hot work tool steel for oil or air hardening to
              develop high hot quality, support of hardness, and warmth checking
              resistance.
            </p>
            <p>
              This is mostly utilized as hot work devices, instruments for
              manufacture of hollows, screws, rivets, nuts and bolts. Die
              casting tools, forming dies, die inserts, hot shear blades.
            </p>
          </div>
          {/* <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
            alt="DB6 Image"
            width={300}
          />
        </div> */}
        </section>

        {/* Chemical Composition */}
        <section className="hot-work-composition">
          <h3 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h3>
          <div className="table-data d-flex justify-content-center">
            <div className="hot-work-chemical-composition hot-work-composition-table table-responsive-custom">
              <table>
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>C</th>
                    <th>Si</th>
                    <th>Mn</th>
                    <th>P</th>
                    <th>S</th>
                    <th>Cr</th>
                    <th>W</th>
                    <th>V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.26-0.36</td>
                    <td>0.15-0.25</td>
                    <td>0.20-0.40</td>
                    <td> 0.003 max</td>
                    <td>0.030max</td>
                    <td>3.00-3.75</td>
                    <td>8.50-10.00</td>
                    <td>0.30-0.60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Steel properties */}
        <section className="steel-properties">
          <h2>Steel Properties</h2>
          <p>
            Hot work steel has great toughness and contains Tungsten, Chromium,
            Carbon, Vanadium and generally its working hardness is 40.0 to 55.0
            HRC size and is accessible in round, level and square shapes.
          </p>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            The H21 tungsten hot-work tool steels are primarily utilized for
            hot-working dies and tooling. For example extrusion, die casting &
            hot-forming of parts.
          </p>
        </section>

        {/* Thermal properties */}
        <section className="thermal-properties">
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
                      <td>11.2</td>
                    </tr>
                    <tr>
                      <td>20-200</td>
                      <td>11.9</td>
                    </tr>
                    <tr>
                      <td>20-300</td>
                      <td>12.2</td>
                    </tr>
                    <tr>
                      <td>20-400</td>
                      <td>12.5</td>
                    </tr>
                    <tr>
                      <td>20-500</td>
                      <td>12.8</td>
                    </tr>
                    <tr>
                      <td>20-600</td>
                      <td>13.0</td>
                    </tr>
                    <tr>
                      <td>20-700</td>
                      <td>13.2</td>
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
                      <td>100</td>
                      <td>27.0</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>29.8</td>
                    </tr>
                    <tr>
                      <td>675</td>
                      <td>29.1</td>
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
                      <td>780-810</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Slowly</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>max. 240</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>1000-1130</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Oil or Hot Bath 600-650°C</td>
                    </tr>
                    <tr>
                      <th>Hardness after Quenching HRC</th>
                      <td>53</td>
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
                      <th>HRC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100</td>
                      <td>49</td>
                    </tr>
                    <tr>
                      <td>210</td>
                      <td>49</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>49</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>49</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>51</td>
                    </tr>
                    <tr>
                      <td>550</td>
                      <td>51</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>650</td>
                      <td>46</td>
                    </tr>
                    <tr>
                      <td>700</td>
                      <td>36</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="availability-info my-4">
          <div className="container">
            <h4 className="mb-3">Availability</h4>
            <p>
              All grades of H21 / AISI H21 / DIN 1.2581 are available on
              <strong> advance order</strong> basis on <strong>MOQ</strong> as
              per size requirements.
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
          <span>MOQ: 5 Tonnes</span>
        </div>
      </div>
    </>
  );
}
