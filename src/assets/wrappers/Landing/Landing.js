import styled from "styled-components";

const Wrapper = styled.main`
	nav {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -4rem;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			justify-items: center;
		}
		.main-img {
			display: block;
			width: 400px;
			object-fit: cover;
			height: auto;
		}
	}
`;

export default Wrapper;
