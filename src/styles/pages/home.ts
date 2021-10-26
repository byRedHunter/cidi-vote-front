import styled from 'styled-components'

export const HomeWrapper = styled.section`
	width: 100%;
`
export const MessageHomeWrapper = styled.div`
	width: 26rem;
	padding: 2rem;
	background: var(--color-main);
	border-radius: 0.8rem;
	p {
		color: var(--color-light);
		margin-bottom: 2rem;
		font-size: 1.6rem;
	}
	a {
		display: block;
		padding: 1.5rem 0;
		background: var(--color-dark);
		color: var(--color-light);
		text-align: center;
		text-transform: uppercase;
	}
`
export const ElecctionCardWrapper = styled.article`
	width: 100%;
	min-height: 16rem;
	padding: 2rem;
	background: var(--color-main);
	border-radius: 0.8rem;
	box-shadow: var(--box-shadow);
	margin-bottom: 3rem;
	p {
		margin: 1rem 0 2rem;
		color: #dedede;
	}
`
export const ElecctionTitle = styled.h3`
	color: var(--color-light);
	font-size: 2rem;
`
export const ElecctionActions = styled.div`
	display: grid;
	grid-template-columns: 1fr 6rem;
	column-gap: 2rem;
	button {
		font-size: 1.2rem;
		text-transform: capitalize;
		height: 3rem;
		background: transparent;
		border: 0.1rem solid var(--color-com);
		color: var(--color-light);
		margin-right: 1rem;
		min-width: 7rem;
	}
	button.main {
		background: var(--color-dark);
		color: var(--color-light);
		margin-right: 0;
		border: none;
	}
`
export const MessageHomeCliente = styled.div`
	p {
		margin-bottom: 4rem;
	}
	figure {
		width: 28rem;
		padding: 1.5rem;
		background: var(--color-main);
		img {
			width: 100%;
		}
	}
`
export const SectionInfoUsers = styled.section`
	width: 100%;
	margin-top: 3rem;
`
export const InfoUsersGrid = styled.ul`
	display: grid;
	grid-template-columns: 5rem 6rem 10rem 1fr;
	gap: 1rem;
	margin-bottom: 1rem;
	align-items: center;
	&.line {
		border-bottom: 0.2rem solid var(--color-com);
		padding-bottom: 0.5rem;
	}
	.title {
		color: var(--color-main);
		font-weight: 400;
	}
	figure {
		height: 5rem;
		width: 5rem;
		border-radius: 50%;
		overflow: hidden;
	}
`
export const TextUser = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	width: 100%;
`
export const InfoActions = styled.div`
	display: flex;
	width: 100%;
	button {
		width: 50%;
		height: 3.5rem;
		display: grid;
		place-items: center;
		background: var(--color-dark);
		span svg {
			color: var(--color-light);
			fill: var(--color-light);
			height: 2rem;
			width: 2rem;
		}
	}
	button:last-of-type {
		background: var(--color-main);
	}
`
export const TableFooter = styled.div`
	width: 20rem;
	margin-top: 2rem;
	button {
		width: 50%;
		font-size: 1.4rem;
		background: var(--color-main);
		padding: 1rem 0;
		color: var(--color-light);
	}
	button:last-of-type {
		background: var(--color-com);
		color: var(--color-dark);
	}
`
