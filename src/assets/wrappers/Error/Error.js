import styled from "styled-components";

const Wrapper = styled.div`
	div {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--fixed-width);
		padding-top: 3rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		h3 {
			font-weight: 700;
			padding-top: 3rem;
			margin-bottom: 0;
		}
		p {
			margin-top: 0;
			font-size: 18px;
		}
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
`;

export default Wrapper;
