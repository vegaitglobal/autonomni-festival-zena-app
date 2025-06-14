'use client';

import { usePage } from '@/hooks/usePage';
import { fetchLayout } from '@/services/layoutService';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { content: layout, loading, error } = usePage(fetchLayout);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading layout: {error}</div>;

	return (
		<>
			<Header layout={layout} />
			<main>
				<div className="layout__wrapper">
					<div className="inner__wrapper">
						{children}
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam vero
						tempore fuga? Labore cumque dolorem quaerat asperiores quae vitae quos et
						eligendi doloribus sequi animi facere fugiat impedit quis sapiente libero,
						aut harum rerum sit necessitatibus ad repellat. Hic voluptas omnis dolorum
						natus, harum aliquam libero pariatur. Laborum, velit. Quos nemo nam
						doloremque? Quidem, modi quia explicabo blanditiis animi excepturi nobis,
						dolores dolor impedit deleniti laboriosam nihil eaque facilis
						exercitationem saepe, voluptatibus nostrum quasi? Molestias harum
						reprehenderit nisi quam repellat amet, cum eum culpa dolores cupiditate
						recusandae aperiam deleniti, at explicabo? Quo voluptas explicabo
						laudantium amet, sint a mollitia ullam animi harum laboriosam fugit
						reiciendis! Omnis corrupti laboriosam perferendis libero veritatis sed
						adipisci soluta impedit delectus cupiditate. A optio itaque eius placeat,
						consectetur accusantium non soluta reiciendis tempore corrupti esse, est
						assumenda, voluptates explicabo molestiae. Illo ex, architecto sequi
						autem, veniam at rem libero quo voluptates minima beatae sapiente
						perferendis ipsam debitis recusandae fugiat nobis. Debitis blanditiis sit
						optio, accusantium a quasi explicabo officia dicta. Laboriosam doloribus
						quis ad excepturi nisi, aut reprehenderit. Illo omnis, ad sequi nostrum
						velit voluptatum ipsum perferendis? Fuga aliquam libero repellendus
						expedita illum soluta at laborum sapiente, distinctio, nobis, provident
						pariatur. Quis, quaerat, non voluptatem reiciendis rem molestiae tempora
						repudiandae neque, architecto nihil incidunt explicabo iure! Nisi, eius.
						Corrupti nobis esse architecto, temporibus cum nesciunt harum placeat
						molestiae ducimus quo dolorum quis nostrum non pariatur fuga laudantium
						obcaecati. Cumque adipisci nulla quod illum commodi suscipit non mollitia
						veniam, nam molestias dolore magnam obcaecati, laboriosam nisi saepe cum
						iusto eius id expedita vero numquam voluptate. Sequi ex sed cum suscipit
						eos vero ipsam commodi, ab excepturi, sunt perferendis laborum beatae sit
						fuga voluptate, tempore ullam similique consectetur quibusdam quisquam!
						Expedita cumque rerum sit fuga, quam molestias, enim nihil delectus fugiat
						omnis facilis blanditiis, eum quae at?
					</div>
				</div>
			</main>
			<Footer layout={layout} />
		</>
	);
}
