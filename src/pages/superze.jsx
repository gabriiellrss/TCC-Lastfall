import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SuperZe.rar"; // Caminho do arquivo
    link.download = "SuperZe.zip"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  <Button variant="success" onClick={handleDownload}>
    Baixar Jogo
  </Button>
  

function SuperZeGamePage() {
    return(
        <section className="w-100" style={{backgroundColor: "#2C2F33"}}>
            <Container className="pt-5">
                <img className="w-100" src="/SuperZe-IV/1x/Prancheta 5logoPng1x.png" alt="" />
            </Container>

            <Container className="py-5" >
                <Button className="w-100" style={{backgroundColor: "#00BFFF", border: '#00BFFF'}} onClick={handleDownload}>
                    Download
                </Button>
            </Container>
        
        </section>
    )
};

export default SuperZeGamePage;
