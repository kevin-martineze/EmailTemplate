import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Section, Text, Button } from "@react-email/components";
import { GrNext } from "react-icons/gr";

const Procedures = () => {

  // Para mostrar procedimientos
  const [procedures, setProcedures] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setProcedures(data);
      } catch (error) {
        console.error("Error al obtener datos de procedures:", error);
      }
    };

    fetchData();
  }, []);

  // Calculo de precio de los procedimientos
  const [selectedProcedures, setSelectedProcedures] = useState([]);
  const calculateTotalProcedurePrice = () => {
    return selectedProcedures.reduce((total, procedure) => {
      const selectedProcedure = procedures.find((p) => p.name === procedure);
      return total + (selectedProcedure ? selectedProcedure.price : 0);
    }, 0);
  };

  return (
    <div>
      <Formik
        initialValues={{
          selectedProcedure: "",
        }}
        onSubmit={(values) => {
          setSelectedProcedures([
            ...selectedProcedures,
            values.selectedProcedure,
          ]);
        }}
      >
        <Form>
          <Section style={paragraphList} className="mx-6">
            <Text
              className="flex uppercase bold text-center font-medium"
              style={{ color: "#b10f48" }}
            >
              {/* Nombre del cliente */}
              {/* Procedures ({values.selectedProcedure}) Packages */}
            </Text>

            {procedures.map((procedure, index) => (
              <React.Fragment key={index}>
                <Field
                  type="radio"
                  id={`procedure_${index}`}
                  name="selectedProcedure"
                  value={procedure.name}
                />
                <label htmlFor={`procedure_${index}`}>
                  <Text style={contentervices} className="flex items-center">
                    <GrNext className="mr-2" style={{ color: "#75032b" }} />{" "}
                    {procedure.name}
                  </Text>
                </label>
                <p className="ml-9 text-stone-400 text-xs">
                  {procedure.technology}
                </p>
              </React.Fragment>
            ))}

            <div className="flex items-center justify-between">
              <Button
                href=""
                type="submit"
                className="text-white rounded-full h-6 w-36 mx-3 my-4 text-center"
                style={{
                  backgroundColor: "#b10f48",
                }}
              >
                Any Questions?
              </Button>
              <div className="mr-10">
                <Text className="text-black text-right">
                  <p style={{ color: "#b10f48", fontWeight: "bold" }}>
                    {/* Suma de precios de los procedimientos */}${" "}
                    {calculateTotalProcedurePrice()}
                  </p>
                  <p>{selectedProcedures.length} Surgical Procedures</p>
                </Text>
              </div>
            </div>
          </Section>
        </Form>
      </Formik>
    </div>
  );
};

const contentervices = {
  color: "black",
  display: "flex",
  textAlign: "center",
  margin: "15px 15px 15px 15px",
};

const paragraphList = {
  paddingLeft: 40,
};
export default Procedures;
