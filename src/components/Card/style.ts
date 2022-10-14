import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;

  body {
    font-family: "Quicksand", sans-serif;
    display: grid;
    place-items: center;
    height: 100vh;
    background: #7f7fd5;
    background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin-block: 2rem;
    gap: 2rem;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ece9e6;
    background: linear-gradient(to right, #ffffff, #ece9e6);
  }

  .card-body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .tag-brown {
    background: #d1913c;
    background: linear-gradient(to bottom, #ffd194, #d1913c);
    color: #fafafa;
  }

  .tag-red {
    background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
  }

  .card-body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .card-body p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PriceTag = styled.span`
  display: inline-block;
  width: 70px;
  height: 38px;
  background-color: #6ab070;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;
  border-left: 1px solid #6ab070;
  margin-left: 19px;
  position: relative;
  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;
  padding: 0 10px 0 10px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #6ab070;
  }

  &:after {
    content: "";
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`;
