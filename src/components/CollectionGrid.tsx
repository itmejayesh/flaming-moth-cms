"use client";
import Image from "next/image";
import {useCollection} from "@/hooks/useCollection";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {fetchCollections} from "@/api";

const CollectionGrid = () => {
	const {data: collection} = useQuery({
		queryKey: ["collection"],
		queryFn: fetchCollections,
	});
	const router = useRouter();
	return (
		<section className="container mx-auto">
			<div className="flex flex-col items-center gap-4 pb-10">
				<div>
					<h2 className="font-medium text-2xl">Latest Collections</h2>
					<p className="text-xs text-gray-500/80 text-center">
						Follow us the most popular trends
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
					{collection?.map((item) => (
						<div key={item?.id}>
							<div
								className="mt-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 rounded-xl overflow-hidden cursor-pointer"
								onClick={() => router.push(`/collections/${item.title}`)}
							>
								<Image
									src={item?.image}
									alt=""
									width={180}
									height={180}
									className="w-auto h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-1000 cursor-pointer"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-50 opacity-25 hover:opacity-90 transition-opacity duration-300" />
								<h6 className="absolute w-full text-center bottom-5 left-0 text-white px-2 shadow-2xl font-bold">
									{item?.title}
								</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CollectionGrid;
