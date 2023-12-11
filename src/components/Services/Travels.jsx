import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Section, Text } from "@react-email/components";
import { GrNext } from "react-icons/gr";

const Travels = () => {
  // Para mostrar los servicios de transporte
  const [travelServices, setTravelServices] = useState([]);
  useEffect(() => {
    const fetchTravelData = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setTravelServices(data);
      } catch (error) {
        console.error("Error al obtener datos de travels:", error);
      }
    };

    fetchTravelData();
  }, []);

  // Para mostrar el precio de los servicios seleccionados
  const [selectedTravelServices, setSelectedTravelServices] = useState([]);
  const calculateTotalTravelServicePrice = () => {
    return selectedTravelServices.reduce((total, service) => {
      const selectedService = travelServices.find((s) => s.name === service);
      return total + (selectedService ? selectedService.price : 0);
    }, 0);
  };
  return (
    <div>
      <Formik
        initialValues={{
          selectedTravelService: "",
        }}
        onSubmit={(values) => {
          setSelectedTravelServices([
            ...selectedTravelServices,
            values.selectedTravelService,
          ]);
        }}
      >
        <Form>
          <Section style={paragraphList} className="mx-6">
            <Text
              className="flex uppercase bold text-center font-medium"
              style={{ color: "#b10f48" }}
            >
              Travel Services
            </Text>

            {travelServices.map((service, index) => (
              <React.Fragment key={index}>
                <Field
                  type="radio"
                  id={`travelService_${index}`}
                  name="selectedTravelService"
                  value={service.name}
                />
                <label htmlFor={`travelService_${index}`}>
                  <Text style={contentervices} className="flex items-center">
                    <GrNext className="mr-2" style={{ color: "#75032b" }} />{" "}
                    {service.name}
                  </Text>
                </label>
                <p className="ml-9 text-stone-400 text-xs">{service.details}</p>
              </React.Fragment>
            ))}
            <p className="flex items-center mx-7 my-5 text-stone-400 text-xs">
              Schedule a video call with one of our experienced surgical
              consultants. They are ready to answer all your questions and help
              you plan your transformation journey.
            </p>
            <div className="flex justify-end mr-12">
              <Text style={{ color: "black", justifyContent: "center" }}>
                <p
                  className=""
                  style={{ color: "#b10f48", fontWeight: "bold" }}
                >
                  {/* Precio dinámico según el servicio de viajes seleccionado */}
                  $ {calculateTotalTravelServicePrice()}
                </p>
              </Text>
            </div>
          </Section>
        </Form>
      </Formik>
    </div>
  );
};

const paragraphList = {
  paddingLeft: 40,
};

const contentervices = {
  color: "black",
  display: "flex",
  textAlign: "center",
  margin: "15px 15px 15px 15px",
};

export default Travels;
