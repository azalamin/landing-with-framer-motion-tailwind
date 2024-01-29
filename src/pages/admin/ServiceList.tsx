import { useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

const ServiceList = () => {
	const [name, setName] = useState("");

	const queryClient = useQueryClient();

	const {
		mutateAsync,
		isError: addError,
		isSuccess,
	} = useMutation({
		mutationFn: async data => {
			return await fetch("http://localhost:5000/api/v1/services", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
		},
		onSuccess: () => {
			return queryClient.invalidateQueries({ queryKey: ["services"] });
		},
	});

	console.log({ addError, isSuccess });

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const serviceData = {
			name: name,
			serviceImg: "internet.jpg",
			description: "Description",
			devices: ["Device 1", "Device 2"],
			price: 49.99,
		};

		console.log(serviceData);
		await mutateAsync(serviceData);

		console.log("done");
	};

	const { isLoading, data: services, isError } = useGetServices();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Something went wrong</p>;
	}

	return (
		<Container className='mt-20 mb-20 border p-0 rounded-2xl'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Price</TableHead>
						<TableHead className='text-right'>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{services.map(service => (
						<TableRow key={service.id}>
							<TableCell className='font-medium'>{service.name}</TableCell>
							<TableCell>{service.description}</TableCell>
							<TableCell>{service.price}</TableCell>
							<TableCell className='text-right'>
								<Button variant='destructive' className='p-2'>
									<Trash2 />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total Service</TableCell>
						<TableCell className='text-right'>{services.length}</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<div>
				<form onSubmit={handleSubmit}>
					<input type='text' onChange={e => setName(e.target.value)} />
					<Button type='submit'>Submit</Button>
				</form>
			</div>
		</Container>
	);
};

export default ServiceList;
