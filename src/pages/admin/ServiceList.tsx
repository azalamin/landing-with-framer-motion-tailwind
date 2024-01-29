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
import { Trash2 } from "lucide-react";

const ServiceList = () => {
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
		</Container>
	);
};

export default ServiceList;
