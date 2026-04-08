import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";

export default function A2() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/enquiry", {
      state: {
        selectedGrade: "A2 / 1.2363 ",
        selectedProduct: "Cold Work Steel",
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>
          A2 / 1.2363 | Cold Work Tool Steel | Ventura Alloy & Steels Pvt. Ltd.
        </title>

        <meta
          name="description"
          content="A2 / 1.2363 cold work tool steel known for excellent dimensional stability, high wear resistance and toughness. Ideal for cutting tools, dies, moulds and stamping applications."
        />

        <meta
          name="keywords"
          content="A2 steel, 1.2363 steel, cold work tool steel A2, A2 chemical composition, A2 heat treatment, A2 hardness, A2 datasheet, A2 steel supplier India, SKD12 equivalent, Cr5Mo1V steel, A2 round bar, A2 flats, die steel"
        />

        <link
          rel="canonical"
          href="https://venturasteels.com/products/cold-work-steel/a2"
        />

        {/* Product Schema */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "A2 Cold Work Tool Steel",
  "description": "A2 / 1.2363 cold work tool steel with high wear resistance, toughness and excellent dimensional stability, widely used in cutting tools, dies and mould applications.",
  "brand": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Ventura Alloy & Steels Pvt. Ltd."
  },
  "material": "Cold Work Tool Steel",
  "url": "https://venturasteels.com/products/cold-work-steel/a2",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material Grade",
      "value": "A2 / 1.2363 / SKD12 / X100CrMoV5-1"
    },
    {
      "@type": "PropertyValue",
      "name": "Form",
      "value": "Round, Flat, Block"
    }
  ]
}
`}
        </script>
      </Helmet>

      <div className="grade-details">
        <h2 className="text-center">A2 / 1.2363 </h2>
        <p className="subtitle text-center">
          Cold work tool steel with wear resistance and stability.
        </p>

        {/* standards  */}
        <div className="cold-work-standards-scroll-wrapper mb-4">
          <div className="cold-work-standards-inner-scroll">
            <table className="standards-table">
              <tbody>
                <tr>
                  <td>
                    <strong>COUNTRY </strong>
                  </td>
                  <td>USA</td>
                  <td>Germany / Europe</td>
                  <td>Japan</td>
                  <td>China</td>
                  <td>UK</td>
                  <td>France</td>
                </tr>
                <tr>
                  <td>
                    <strong>STANDARDS</strong>
                  </td>
                  <td>ASTM / AISI</td>
                  <td>DIN / EN</td>
                  <td>JIS</td>
                  <td>GB</td>
                  <td>BS</td>
                  <td>AFNOR</td>
                </tr>
                <tr>
                  <td>
                    <strong>EQUIVALENT NAME</strong>
                  </td>
                  <td>A2</td>
                  <td>1.2363 / X100CrMoV5-1</td>
                  <td>SKD12</td>
                  <td>Cr5Mo1V</td>
                  <td>BA2</td>
                  <td>Z100CDV5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Overview */}
        <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
          <div className="overview-content">
            <p>
              Ventura Alloy and Steels supplies & stocks A2 Steel in India and
              abroad. A2 Steel has greater dimensional stability during heat
              treatment and high wear resistance and strength (potency). It is
              primarily utilized in cutting instruments, shear razor sharp
              edges, rolls, cold pilger mandrels, cold stamping devices, moulds
              for plastics handling.
            </p>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="cold-work-composition">
          <h3 className="mb-4 text-center">
            Chemical Composition (Typical Analysis in %)
          </h3>
          <div className="table-data d-flex justify-content-center">
            <div className="cold-work-chemical-composition cold-work-composition-table table-responsive-custom">
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
                    <th>Mo</th>
                    <th> V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Range</td>
                    <td>0.95-1.05</td>
                    <td>0.10-0.40</td>
                    <td>0.40-0.80</td>
                    <td>0.030 max</td>
                    <td>0.030 max</td>
                    <td>4.80-5.50</td>
                    <td>0.90-1.20</td>
                    <td>0.15-0.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* applications */}
        <section className="steel-properties">
          <h2>Steel Properties</h2>
          <p>
            A2 Steel is equivalent of DIN 2363 and it provides extreme hardness
            after heat treatment with great dimensional stability. It is heat
            treatable and offers hardness in the range of 53-63 HRC.
          </p>
        </section>

        {/* applications */}
        <section className="applications">
          <h2>Applications</h2>
          <p>
            A2 Steel is mainly used for cutting tools, shear blades, rolls, cold
            mandrels, moulds for plastics processing, cold stamping tools,
            blanking tools, trim dies, punch dies, forming dies, stamping dies
            etc.
          </p>
        </section>

        {/* Thermal properties */}
        <section className="coldwork-thermal-properties">
          <h2 className="thermal-section-title">Physical Properties</h2>
          <div className="col-md-7 mx-auto">
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
                    <td>15.9</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>26.8</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>29.8</td>
                  </tr>
                </tbody>
              </table>
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
                      <td>810-850</td>
                    </tr>
                    <tr>
                      <th>Cooling</th>
                      <td>Furnace</td>
                    </tr>
                    <tr>
                      <th>Hardness HB</th>
                      <td>max. 232</td>
                    </tr>
                    <tr>
                      <th>Stress-relief Annealing °C</th>
                      <td>approx. 650</td>
                    </tr>
                    <tr>
                      <th>Hardening °C</th>
                      <td>930-970</td>
                    </tr>
                    <tr>
                      <th>Quenching</th>
                      <td>Air, Oil, Salt Bath 500-550°C</td>
                    </tr>
                    <tr>
                      <th>Hardness after quenching HRC</th>
                      <td>63</td>
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
                      <td>64</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>63</td>
                    </tr>
                    <tr>
                      <td>300</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>400</td>
                      <td>58</td>
                    </tr>
                    <tr>
                      <td>500</td>
                      <td>59</td>
                    </tr>
                    <tr>
                      <td>600</td>
                      <td>53</td>
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
              All grades of A2 / 1.2363 are available on
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
         <div className="cta-block d-flex gap-3 align-items-center flex-wrap">
          <button onClick={handleEnquiryClick} className="btn btn-primary">
            Enquire Now
          </button>

          <button
            className=" weight-btn"
            data-bs-toggle="modal"
            data-bs-target="#weightModal"
          >
            Calculate Weight
          </button>

          {/* <span>MOQ: 10 Tonnes</span> */}
        </div>
      </div>
    </>
  );
}
