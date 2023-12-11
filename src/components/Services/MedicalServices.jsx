import { Section, Text, Button } from "@react-email/components";
import { GrNext } from "react-icons/gr";

const MedicalServices = () => {
  return (
    <div>
      <Section style={paragraphContent} className="mx-6">
        <div className="mr-10">
          <Text style={heading} className="flex items-center justify-center">
            {/* {values.personName && `${values.personName} SPECIAL OFFER!`} */}
          </Text>
        </div>

        <Text
          className="flex uppercase bold text-center font-medium"
          style={{ color: "#b10f48" }}
        >
          Medical Services
        </Text>
        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Medical Fees
        </Text>
        <p className="ml-9 text-stone-400 text-xs">Operating Room, Surge</p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Anesthesia
        </Text>
        <p className="ml-9 text-stone-400 text-xs">Anesthesiologist</p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Pre Surgical
          Examns
        </Text>
        <p className="ml-9 text-stone-400 text-xs">
          Blood Tests - X Rays - Ultrasounds
        </p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Medical
          Insurance
        </Text>
        <p className="ml-9 text-stone-400 text-xs">Policy</p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> VIP Hospital
          Room
        </Text>
        <p className="ml-9 text-stone-400 text-xs">
          1 Hospitalizacion Night after surgery
        </p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Drainage
          Massage
        </Text>
        <p className="ml-9 text-stone-400 text-xs">
          10 Recovery Massage Sessions
        </p>

        <Text style={contentervices} className="flex items-center">
          <GrNext className="mr-2" style={{ color: "#75032b" }} /> Support
          Garments
        </Text>
        <p className="ml-9 text-stone-400 text-xs">
          1 Set of Recovery Garments
        </p>

        <div className="flex items-center justify-between">
          <Button
            href=""
            className="text-white rounded-full h-6 w-36 mx-3 my-4 text-center"
            style={{
              backgroundColor: "#b10f48",
            }}
          >
            Any Questions?
          </Button>
          <div className="mr-10">
            <Text className="text-black text-right">
              <p style={{ color: "#b10f48", fontWeight: "bold" }}>FREE</p>
              <p>Only at Queen Catalina</p>
            </Text>
          </div>
        </div>
      </Section>
    </div>
  );
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#75032b",
};

const paragraphContent = {
  padding: "0 40px",
};

const contentervices = {
  color: "black",
  display: "flex",
  textAlign: "center",
  margin: "15px 15px 15px 15px",
};

export default MedicalServices;
