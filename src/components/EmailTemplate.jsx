import {
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";
import LogoQueen from "./../assets/LogoQueenCatalina.png";
import MedicalServices from "./Services/MedicalServices";
import Procedures from "./Services/Procedures";
import Travels from "./Services/Travels";

const Email = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <Html>
        <Head />
        <Container style={container} className="px-4 py-4 shadow-2xl">
          <Container
            className="flex items-center justify-center"
            style={{
              backgroundColor: "#75032b",
            }}
          >
            <Img
              src={LogoQueen}
              width="100"
              height="40"
              style={{ margin: "10px 0 10px 0" }}
            ></Img>
          </Container>
          <Section>
            <Column className="flex items-center justify-center"></Column>
          </Section>
          <MedicalServices />
          <Hr />
          <Procedures />
          <Hr />
          <Travels />
          <Hr />
          <Section style={{ paddingBottom: 30 }} className="mb-3">
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
              className="mb-3"
            >
              © {year} Queen Catalina
            </Text>
          </Section>
        </Container>
      </Html>
    </div>
  );
};

const container = {
  margin: "30px auto",
  width: "500px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  overflow: "hidden",
};

const paragraph = {
  fontSize: "uppercase",
  // display: 'flex',
  lineHeight: "22px",
  color: "#3c4043",
};

export default Email;
