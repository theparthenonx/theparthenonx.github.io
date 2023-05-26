import React from "react";

import Client from '../../assets/3.png'
import ClientHover from '../../assets/clienthover.png'
import Client2 from '../../assets/client2.png'
import Client2Hover from '../../assets/img2hover.png'
import Client3 from '../../assets/client3.png'
import Client3Hover from '../../assets/img3hover.png'
import Web3 from 'web3';


import { UseEffectScroll } from 'react-use-smooth-scroll'
import 'react-use-smooth-scroll/dist/index.css'

import Fade from 'react-reveal/Fade';

import Footer from "../../components/Footer";

/*global web3*/
const Consulting = () => {

    const mint = async () => {

        if (typeof web3 !== 'undefined') {
            window.web3 = new Web3(web3.currentProvider);
            console.log(window.web3);
        } else {
            alert("Please connect to your Metamask wallet.");
        }

        // let accounts;
        // let account;
        // if (window.ethereum) {
        //     accounts = await window.ethereum
        //       .request({ method: "eth_requestAccounts" });
        //     account = accounts[0];
        // } else {
        //     alert("install metamask extension!!");
        // }
        let accounts = await web3.eth.requestAccounts();
        const account = accounts[0];
        console.log(account);
        const ProjectContractAddress = '0x481d376f154457415e3Be762E6d03eea96A595E5'; // <-- insert contract address here
        const ProjectContractABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "baseURI",
                        "type": "string"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeBatchTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    }
                ],
                "name": "setMetadataUri",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "values",
                        "type": "uint256[]"
                    }
                ],
                "name": "TransferBatch",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "TransferSingle",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "URI",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "accounts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    }
                ],
                "name": "balanceOfBatch",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "uri",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]; // <-- insert abi here
        const ProjectContract = new web3.eth.Contract(ProjectContractABI, ProjectContractAddress);
        // Insert any user interaction, for example:
        const price = 10000000000000000;
        // End user interaction
        // Need to specify account and price for mint
        // Specify params if needed according to mint function signature e.g. (numTokens for ERC721A mint)
        ProjectContract.methods.mint().send({ from : account, value : price });
    }
    return (
        <UseEffectScroll>
        <div className="consulting">
            <div className="bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <section className="who-we-are">
                                <Fade bottom>
                                <h1 className="h1">WHO WE ARE</h1>
                                </Fade>
                                <Fade bottom>
                                <p className="p">At The Parthenon, we differentiate ourselves from the average Web3 Consultancy or Contract Service. We approach every project, every inquiry, and every potential client from the perspective of a partnership. We provide advisory services to our clients, issue recommendations, and help develop tailor-made solutions to continuously improve user-experience for patrons, ease of access for our clients, and sustainability for projects. </p>
                                </Fade>
                                <img src="https://static.wixstatic.com/media/0177ed_60dd590dfc2a457699db14746501fe54~mv2.png/v1/fill/w_210,h_259,al_c,usm_0.66_1.00_0.01,enc_auto/image_edited_edited.png" />
                                <Fade bottom>
                                <p className="p">We believe in effective communication and in the consolidation of our resources in order to drive sustainable growth in a consistent and reliable fashion.</p>
                                <p className="p">If you believe you can provide utility to your patrons, we believe we can help.</p>
                                </Fade>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <section className="services">
                                <h1 className="h1">SERVICES</h1>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Fade bottom>
                                        <div className="service">
                                            <img src="https://static.wixstatic.com/media/0177ed_71572bea99c446d6831aa65dbe780468~mv2.png/v1/fill/w_125,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/robot_edited.png" />
                                        
                                            <h2 className="h2">BOT DEVELOPMENT</h2>
                                            <p className="p">We create custom discord bots to drive engagement within your servers. </p>
                                        </div>
                                        </Fade>
                                    </div>
                                    <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="service">
                                            <img src="https://static.wixstatic.com/media/0177ed_14769c7456b749709f1b5c5ea159a9d6~mv2.png/v1/fill/w_125,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/nib_edited.png" />
                                            <h2 className="h2">SMART CONTRACTS</h2>
                                            <p className="p">We design and deploy curated contractual frameworks to suit your needs.</p>
                                        </div>
                                        </Fade>
                                    </div>
                                    <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="service">
                                            <img src="https://static.wixstatic.com/media/0177ed_523ab2b433af4454971cf59dceba3c01~mv2.png/v1/fill/w_128,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/database_edited.png" />
                                            <h2 className="h2">DATABASES</h2>
                                            <p className="p">Every business has important data. We help you get to know yours. </p>
                                        </div>
                                        </Fade>
                                    </div>
                                    <div className="col-md-6">
                                    <Fade bottom>
                                        <div className="service">
                                            <img src="https://static.wixstatic.com/media/0177ed_1cfe4f8961c7466db58dc3ea0496d10c~mv2.png/v1/fill/w_125,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/megaphone_edited.png" />
                                            <h2 className="h2">MARKETING & BRANDING</h2>
                                            <p className="p">Market research, customer segmentation & brand identity designed with your project in mind. </p>
                                        </div>
                                        </Fade>
                                    </div>
                                    <Fade bottom>
                                    <div className="col-lg-12 bottom-text">
                                        <p>We offer a wide range of services including but not limited to the specializations mentioned above. Every Client has their own needs, and we work hard to meet them. Inquire for details or to set up an appointment. </p>
                                    </div>
                                    </Fade>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <section className="our-clients">
                                <h1 className="h1">OUR CLIENTS</h1>
                                <div className="client">
                                    <div className="row" style={{alignItems: 'center', justifyContent: "center"}}>
                                        <div className="col-md-5">
                                        <Fade bottom>
                                            <div className="image-block">
                                            <a href="https://www.apedocs.com/">
                                                <img src={Client} className="img1" />
                                                <img src={ClientHover} className="img1hover"/>
                                            </a>
                                            </div>
                                        </Fade>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                        {/* <Fade bottom> */}
                                            <div className="detail-block">
                                                <h1 className="h1">01</h1>
                                                <hr />
                                                <h2 className="h2">APEDOCS</h2>
                                                <h2 className="h2">Metadata Consultancy <br />
                                                Smart Contract Framework & Deployment</h2>
                                            </div>
                                        {/* </Fade> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="client">
                                    <div className="row" style={{alignItems: 'center', justifyContent: "center"}}>
                                        <div className="col-md-5">
                                        <Fade bottom>
                                            <div className="image-block">
                                            <a href="https://fertileguppies.com/">
                                                <img src={Client2} className="img2"/>
                                                <img src={Client2Hover} className="img2hover"/>
                                            </a>
                                            </div>
                                        </Fade>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                        {/* <Fade bottom> */}
                                            <div className="detail-block">
                                                <h1 className="h1">02</h1>
                                                <hr />
                                                <h2 className="h2">FERTILE GUPPIES</h2>
                                                <h2 className="h2">Bot development <br />
                                                Database Integration </h2>
                                            </div>
                                        {/* </Fade> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="client">
                                    <div className="row" style={{alignItems: 'center', justifyContent: "center"}}>
                                        <div className="col-md-5">
                                        <Fade bottom>
                                            <div className="image-block">
                                                <a href="https://discord.gg/CDxGmDjtcG">
                                                <img src={Client3}  className="img3"/>
                                                <img src={Client3Hover}  className="img3hover"/>
                                                </a>
                                            </div>
                                            </Fade>
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                        {/* <Fade bottom> */}
                                            <div className="detail-block">
                                                <h1 className="h1">03</h1>
                                                <hr />
                                                <h2 className="h2">SPYNNERGY: Metamorphosis</h2>
                                                <h2 className="h2">Project Consultancy <br />
                                                Marketing Strategy<br/>
                                                Smart Contract Framework & Deployment
                                                </h2>
                                            </div>
                                            {/* </Fade> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-us" className="contact-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <section className="contact-us">
                                <h1 className="h1">MINT</h1>
                                <div className="contact-form">
                                    <button className="btn-contact" onClick={mint}>Mint</button>
                                </div> 
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </UseEffectScroll>
    )
}

export default Consulting;