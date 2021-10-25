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
	grid-template-columns: 1fr 7rem;
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
