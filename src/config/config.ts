export class Config {
	private constructor(
		public readonly SECRET_KEY: string,
		public readonly DB_URL: string
	) {}

	static readFromEnv(): Config {
		return new Config(Config.getEnv("SECRET_KEY"), Config.getEnv("DB_URL"));
	}

	private static getEnv(envName: string) {
		const val = process.env[envName];

		if (!val) {
			throw new Error(
				`Environment variable ${envName} is not set or empty.`
			);
		}

		return val;
	}
}
