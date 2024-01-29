import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
	const [name, setName] = useState("");

	const { mutateAsync, isError, isSuccess } = useMutation({
		mutationFn: async data => {
			return await fetch("http://localhost:5000/api/v1/services", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
		},
	});

	console.log({ isError, isSuccess });

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

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={e => setName(e.target.value)} />
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default AddService;
