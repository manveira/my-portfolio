import Devops_profesional from "./images/Devops_profesional.png";
import Admin from "./images/Admin.png";
import aws from "./images/aws.png";
import Linux from "./images/Linux.png";
import terraform from "./images/terraform.png";
import kubernetes from "./images/kubernetes.png";
import docker from "./images/docker.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: Devops_profesional,
            cardTitle: "DevOps Professional Course",
            cardText: "Issued on: <br/> July 27, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/1431-devops/diploma/detalle/",
        },
        {
            img: Admin,
            cardTitle: "DevOps and Server Administration",
            cardText: "Issued on: <br/> August 1, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/ruta/4-servidores/diploma/detalle/",
        },
        {
            img: aws,
            cardTitle: "AWS Cloud Hands-on Course",
            cardText: "Issued on: <br/> June 3, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/1323-aws-cloud-practico/diploma/detalle/",
        },
        {
            img: Linux,
            cardTitle: "Linux Server Administration",
            cardText: "Issued on: <br/> June 10, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/1667-linux-old/diploma/detalle/",
        },
        {
            img: terraform,
            cardTitle: "Infrastructure as a code using Terraform",
            cardText: "Issued on: <br/> July 21, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/1712-devops-terraform/diploma/detalle/",
        }, 
        {
            img: kubernetes,
            cardTitle: "Kubernetes course",
            cardText: "Issued on: <br/> July 19, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/1565-k8s/diploma/detalle/",
        },
        {
            img: docker,
            cardTitle: "Docker course",
            cardText: "Issued on: <br/> July 9, 2022",
            btnText: "See Diploma",
            btnUrl: "https://platzi.com/p/manveira159/curso/2066-docker/diploma/detalle/",
        },        
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#343a40",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
