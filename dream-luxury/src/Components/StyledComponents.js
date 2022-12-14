import styled from 'styled-components';


//App Router
export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid lightgrey;
    height: 100px;
    width: 100%;
    align-items: center;
    box-shadow: 5px 5px 8px #BFBFBF;
    background: #1C1C1C;

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
    
    a {
        margin-left: 50px;
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 20px;
        }
        @media (max-width: 800px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 20px;
            
        }
    }
`;

export const LogoNav = styled.div`
    display: flex;
    height: 100%;
    margin-right: 900px;
    width: 10%;

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }

`;


//About Page
export const AboutHeader = styled.h1`
    margin: 0 auto;
    font-size: 14px;
    text-align: center;
   
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
`;
 
export const Image = styled.div`
    .img-container {
        width: 400px;        
    }
    display: flex;
    height: 100%;
    width: 10%;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }
    
`;


//Welcome Page

export const WelcomeHeader = styled.h1`
    font-family: 'Tangerine', cursive;
    font-weight: regular;
    font-size: 20px;
    text-align: center;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }

`;


export const Images = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid;
    margin-bottom: 100px;
    width: 85%;
    margin-left: 100px;
    @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    }
    @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    
    } 
`;

// export const Couples = styled.div`
//     display: flex;
//     flex-direction: row;
//     border: 2px solid;
//     margin-bottom: 100px;
//     @media (max-width: 500px) {
//         display: flex;
//         justify-content: center;
//         margin: 0 auto;
//     }
//     @media (max-width: 800px) {
//         display: flex;
//         justify-content: center;
//         margin: 0 auto;
        
//     }

//     .couples-images {
//         display: flex;
//         flex-direction: row;
//         flex-wrap: wrap;
//         object-fit: contain;
//         justify-content: space-between;
//         width: 64%;
//         margin: 0 auto;
//         @media (max-width: 500px) {
//             display: flex;
//             justify-content: center;
//             margin: 0 auto;
//         }
//         @media (max-width: 800px) {
//             display: flex;
//             justify-content: center;
//             margin: 0 auto;
            
//         }
//     }
    
//     img {
//         width: 30%;
//         display: flex;
//         flex-direction: row;
//         margin: 0 auto;
//         object-fit: contain;
//         margin-top: 20px;
//         margin-bottom: 20px;
//         @media (max-width: 500px) {
//             display: flex;
//             justify-content: center;
//             margin: 0 auto;
//         }
//         @media (max-width: 800px) {
//             display: flex;
//             justify-content: center;
//             margin: 0 auto;
            
//         }
        
//     }
// `;

//Footer
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 95px;
    
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 20px;
        
    }

    .links a {
        margin: 10px;
    }
`;

// export const Contact = styled.div`
//     border: solid 1px grey;
//     width: 50%;
//     margin: 0 auto;
//     height: 160px;
//     margin-top: 90px;

//     h1 {
//         font-size: 20px;
//         text-align: center;
//         text-decoration: underline;
//     }

//     p {
//         text-align: center;
//     }
// `;

//NewsPage
// export const News = styled.h1`
//     text-align: center;
//     font-size: 14px;
//     font-family: lato serif;
//     margin-top: 15px;
//     margin-bottom: 15px;
// ;`

// export const PastBadge = styled.div`
//     .badge {
//         display: flex;
//         justify-content: center;
//         width: 30%;
//         margin: 0 auto;
//     }
// `;

// export const CardOne = styled.div`
//     border: 2px solid;
//     margin: 0 auto;
//     width: 90%;
//     margin-top: 80px;
    
//     img {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         margin-left: 60px;
//         width: 30%;

//     }
//     .card-header {
//         width: 100%;
//         cursor: pointer;
//     }
//     .accordion-toggle {
//         width: 100%;
//     }

// ;`

// export const CardOneContext = styled.div`
//     .card-body {
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//     }
// `;