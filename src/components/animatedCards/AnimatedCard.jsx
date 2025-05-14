import React from 'react';
import styled from 'styled-components';
import "../../App.css"

const AnimatedCard = ({ animationType = 0, heading, paragraph }) => {

  if (animationType === 0) {
    return (

      <StyledWrapperOne>
        <div className="card m-4 ">
          <p className="heading secondMainColor mb-0">
            {heading}
          </p>
          <p className='para'>
            {paragraph}
          </p>
        </div>
      </StyledWrapperOne>
    )
  }
  else if (animationType === 1) {
    return (

      <StyledWrapperTwo>
        <div className="card m-4 ">
          <p className="heading secondMainColor mb-0">
            {heading}
          </p>
          <p className='para'>
            {paragraph}
          </p>
        </div>
      </StyledWrapperTwo>
    )
  }
  else if (animationType === 2) {
    return (

      <StyledWrapperThree>
        <div className="card m-4 ">
          <p className="heading secondMainColor mb-0">
            {heading}
          </p>
          <p className='para '>
            {paragraph}
          </p>
        </div>
      </StyledWrapperThree>
    )
  }
}



export default AnimatedCard;


const StyledWrapperOne = styled.div`
  .card {
    position: relative;
    width: 220px;
    height: 280px; 
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding:  30px 20px ;
    gap: 12px;
        border-radius: 20px;

    cursor: pointer;
  }
    
.para{
  color:rgb(109, 108, 108);
  font-size:0.92rem;

}


  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
     width: 220px;
    height: 280px;
        border-radius: 20px;

    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }




  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }`;


const StyledWrapperTwo = styled.div`
    .card {
    position: relative;
     width: 220px;
    height: 280px;
     background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding:  30px 20px ;
    gap: 12px;
       border-radius: 20px;

    cursor: pointer;
  }
    
.para{
  color:rgb(109, 108, 108);
  font-size:0.92rem;

}


  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
     width: 220px;
    height: 280px;
        border-radius: 20px;

    background: linear-gradient(-45deg, #ab9e60 0%, #ab9e60 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #ab9e60 0%, #ab9e60 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }`;

const StyledWrapperThree = styled.div`
   .card {
    position: relative;
     width: 220px;
    height: 280px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding:  30px 20px ;
    gap: 12px;
    border-radius: 20px;
    cursor: pointer;
  }
    
.para{
  color:rgb(109, 108, 108);
  font-size:0.92rem;

}


  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 220px;
    height: 280px;
    border-radius: 20px;
    background: linear-gradient(-45deg, red 0%, yellow 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, red 0%, yellow 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }



  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }`;



