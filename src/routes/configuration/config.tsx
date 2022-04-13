import { Page } from 'components/page/page'

export function Config() {
	return (
		<Page headerLabel=" Konfigurácia">
			<div>
				{[1, 2, 3, 4].map(item => (
					<p key={item}>{item}</p>
				))}
			</div>
		</Page>
	)
}
