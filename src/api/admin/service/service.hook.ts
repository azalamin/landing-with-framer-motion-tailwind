import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

type TUseGetServices = { _id: string; name: string; description: string; price: number };

export const useGetServices = () => {
	const servicesData = useQuery({
		queryKey: ["services"],
		queryFn: getServices,
		select: data => {
			const services = data?.data?.data.map((item: TUseGetServices) => ({
				id: item._id,
				name: item.name,
				description: item.description,
				price: item.price,
			}));

			return services;
		},
		// gcTime: 5000, // it hold the cashed data until the time has been set, by default its time is 5 minutes
		// staleTime: 7000, // it does not request to server to refetch data until the time has been set. We can set //!Infinity for the no data change in the UI
	});

	return servicesData;
};
