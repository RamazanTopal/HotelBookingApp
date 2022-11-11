import jwt from "jsonwebtoken";

export const generateToken = (data: object) => {
	const token = jwt.sign(
		{
			...data
		},
		process.env.SECRET_KEY!,
		{ expiresIn: "12h" }
	);
	return token;
};
