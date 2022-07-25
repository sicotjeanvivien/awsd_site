import Image from "next/image";

const CardGame: React.ElementType = ({ name, rules, image, link }) => {
	return (
		<div className="col-12 mb-3">
			<div className="card text-bg-secondary">
				<div className="row g-0">
					<div className="col-md-4">
						<Image src={image} width={50} height={50} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">{rules}</p>
							<div className="d-flex justify-content-end">
								<a href={link} className="btn btn-info" >Jouer</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CardGame;