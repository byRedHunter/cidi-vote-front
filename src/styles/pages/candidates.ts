import styled from 'styled-components'

export const CandidatesWrapper = styled.section`
	width: 100%;
`
export const UlGrid = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	li {
		display: grid;
		grid-template-columns: 5rem 1fr 8rem;
		column-gap: 1rem;
		align-items: center;
	}
	li.line {
		border-bottom: 0.2rem solid var(--color-com);
		padding-bottom: 0.5rem;
	}
	span {
		font-weight: 500;
		color: var(--color-main);
	}
	figure {
		border-radius: 50%;
		height: 5rem;
		width: 5rem;
		overflow: hidden;
	}
	p {
		font-size: 1.4rem;
	}
	button {
		width: 100%;
		background: var(--color-dark);
		font-size: 1.4rem;
		color: var(--color-light);
		padding: 0.8rem 0;
		text-transform: capitalize;
	}
`
