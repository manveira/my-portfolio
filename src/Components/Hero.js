import img from "./images/6.jpg";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1>Jesús Veira</h1>
            <br />
            <p>
              I'm a&nbsp;
              <span
                class="typed"
                data-typed-items="DevOps Engineer, Cloud enthusiast, Passionate"
              >
                <Typed
                  strings={["DevOps Engineer", "Cloud enthusiast", "Passionate"]}
                  loop
                  typeSpeed={90}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              <a href="https://github.com/manveira">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/j-veira/">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:manveira159@gmail.com">
                <i class="bx bx-envelope"></i>
              </a>
            </div>  
            <br />        
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1Xt4faoqnayPxr-ztN8xwt7ZVoDAWjK8p/view?usp=sharing"
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
              View or Download Resume English
            </Button>
            <br /> 
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/17x3mBV04QgxKOefiI1m3A5VQKbbf-n8G/view?usp=sharing"
              startIcon={<CloudDownloadIcon />}
              style={{
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
              View or Download Resume Spanish
            </Button>                
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
