import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4faff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  border-bottom: 2px solid #9ce3f9;
  padding-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;

  &:focus {
    border-color: #9ce3f9;
  }
`;

export const SongList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SongItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  background-color: #e6f7ff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9ce3f9;
    color: #fff;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NoResults = styled.div`
  text-align: center;
  color: #333;
  font-size: 1.2rem;
  margin-top: 20px;
`;
