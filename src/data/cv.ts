export const experiences = [
	{
		company: 'Freelance',
		time: 'Feb 2025 - present',
		title: 'Data Engineer, Research Software Engineer',
		location: 'Berlin',
		highlights: [
			'Simons Foundation: migrated NeMoS optimization backend from JAXopt to Optimistix/Optax, designed a unified solver interface, implemented JAX zoom linesearch in Optimistix.',
			'BuildingMinds: data migration and processing pipelines (dbt) for sustainability calculations.',
		],
	},
	{
		company: 'NeuroRSE Group, Flatiron Institute Center for Computational Neuroscience',
		time: 'Jun 2024 - Aug 2024',
		title: 'Research Software Engineer Intern',
		location: 'New York',
		description:
			'Contributed to NeMoS: improved model selection integration with scikit-learn and implemented SVRG for faster fitting on large datasets.',
	},
	{
		company: 'Be.Neuro Lab',
		time: 'May 2023 - Apr 2024',
		title: 'Research Software Engineer',
		location: 'London',
		description:
			'Kickstarted a data processing pipeline and CLI tool for handling experimental data.',
	},
	{
		company: 'Freelance for OptioPay GmbH',
		time: 'Jul 2022 - Nov 2022',
		title: 'Data Scientist',
		location: '',
		description:
			'Analyzed financial transactions and improved business logic; gained experience with Go, CI/CD, and microservice architecture.',
	},
];

export const education = [
	{
		school: 'Imperial College London',
		time: 'Oct 2020 - Mar 2025',
		degree: 'PhD, Computational Neuroscience',
		location: 'London',
		project: 'Project: Neural correlates of movement planning under uncertainty',
		supervisor: 'Dr. Juan Alvaro Gallego',
		highlights: [
			'Analyzed neural population recordings to understand movement under uncertainty.',
			'Built Python and Julia libraries for trial-based neural data analysis.',
			'Prototyped modular RNNs for experimental workflows.',
		],
	},
	{
		school: 'Bernstein Center for Computational Neuroscience',
		time: 'Oct 2017 - Sep 2020',
		degree: 'MSc, Computational Neuroscience',
		location: 'Berlin',
		grade: 'Grade: 1.0 (best possible in the German system)',
		project:
			'Master project: Unsupervised discovery of discrete neural states in rats playing hide and seek',
		supervisor: 'Prof. Dr. Michael Brecht, Dr. Juan Ignacio Sanguinetti-Scheck',
		highlights: [
			'Organized experimental data into a public SQL database.',
			'Used switching LDS/HMM models to study prefrontal cortex activity.',
			'Validated results with statistical analysis and supervised decoding.',
		],
	},
	{
		school: 'PPCU, Faculty of Information Technology and Bionics',
		time: 'Sep 2013 - Jan 2017',
		degree: 'BSc, Molecular Bionics Engineering',
		location: 'Budapest',
		grade: 'Grade: honours degree',
	},
];

export const skills = [
	{
		title: 'Programming',
		description:
			'Python (PyTorch, JAX, scikit-learn, numpy, pandas, xarray, matplotlib, seaborn), SQL, Julia, C++, Git, CI/CD, Docker, Go, Matlab, R.',
	},
	{
		title: 'Languages',
		description: 'English (fluent, C2), German (fluent, C1), Hungarian (native).',
	},
];

export const publications = [
	{
		title:
			'Unsupervised discovery of behaviorally relevant brain states in rats playing hide-and-seek',
		authors: 'Bagi, M. Brecht, J.I. Sanguinetti-Scheck',
		journal: 'Current Biology',
		time: '2022',
		link: 'https://www.cell.com/current-biology/fulltext/S0960-9822(22)00704-7',
		abstract:
			'Unsupervised discovery of behaviorally relevant brain states in rats playing hide-and-seek.',
	},
	{
		title:
			'Hippocampal sharp wave-ripples and the associated sequence replay emerge from structured synaptic interactions in a network model of area CA3',
		authors:
			'Ecker, Bagi, Vertes, Steinbach-Nemeth, Karlocai, Papp, Miklos, Hajos, Freund, Gulyas, Kali',
		journal: 'eLife',
		time: '2022',
		link: 'https://elifesciences.org/articles/71850v1',
		abstract:
			'Hippocampal sharp wave-ripples and sequence replay emerge from structured synaptic interactions in a network model of area CA3.',
	},
];
