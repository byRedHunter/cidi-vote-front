import styled from 'styled-components'

export const NavbarWrapper = styled.aside`
	width: 32rem;
	height: 100%;
	background: var(--color-dark);
	position: absolute;
	top: 0;
	left: -100%;
	padding: 3rem;
	display: grid;
	grid-template-rows: 110px 1fr;
	row-gap: 4rem;
	transition: 0.3s linear;
	&.active {
		left: 0;
		transition: 0.3s linear;
	}
`
export const NavbarHeader = styled.div`
	figure {
		width: 100%;
		margin-bottom: 2rem;
	}
	button {
		display: block;
		padding: 1rem 4rem;
		margin-left: auto;
		color: var(--color-com);
		background: transparent;
		border: 0.2rem solid var(--color-com);
	}
`
export const NavbarMenu = styled.nav`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	ul {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
`
export const NavbarItem = styled.li`
	width: 100%;
	border-bottom: 0.2rem solid var(--color-main);
	a {
		display: block;
		padding: 1rem 0;
		color: var(--color-light);
	}
`
