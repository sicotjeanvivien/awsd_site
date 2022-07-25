import CardGame from "./component/CardGame";

const ListGames: React.ElementType = ({ games }) => {
	return (
		<div className="row ">
			{
				games.map((value: any, key: number) => {
					return <CardGame key={key} name={value.name} rules={value.rules} image={value.image} link={value.link} />;
				})
			}
		</div>
	)
}

export default ListGames;