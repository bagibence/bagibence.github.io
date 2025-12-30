export const experiences = [
	{
		company: 'Freelance for The Simons Foundation',
		time: 'Feb 2025 - present',
		title: 'Research Software Engineer',
		location: 'Berlin',
    description:
			'Migrated the optimization backend of <a href="https://github.com/flatironinstitute/nemos/">NeMoS</a> from JAXopt to Optimistix and Optax:',
		highlights: [
		    '<a href="https://github.com/flatironinstitute/nemos/pull/365">Designed a unified solver interface and provided adapters for various solver backends.</a>',
        '<a href="https://github.com/flatironinstitute/nemos/pull/444">Added support for objective functions with auxiliary variables.</a>',
        '<a href="https://github.com/flatironinstitute/nemos/pull/411">Ported FISTA and Nesterov\'s accelerated gradient.</a>',
		    '<a href="https://github.com/patrick-kidger/optimistix/pull/177">Implemented JAX zoom linesearch</a> in Optimistix.',
		],
	},
	{
		company: 'Freelance for BuildingMinds GmbH',
		time: 'Aug 2025 - Sept 2025',
		title: 'Data Engineer',
		location: 'Berlin',
		highlights: [
			'Created and updated data migration and processing pipelines (e.g. dbt) for sustainability calculations.',
		],
	},
	{
		company: 'NeuroRSE Group, Flatiron Institute Center for Computational Neuroscience',
		time: 'Jun 2024 - Aug 2024',
		title: 'Research Software Engineer Intern',
		location: 'New York',
		description:
			'Contributed to <a href="https://github.com/flatironinstitute/nemos">NeMoS</a>, a Python package for statistical models for neuroscience: <ul><li>Streamlined model selection by improving integration with scikit-learn.</li><li>Implemented the variance-reduced stochastic optimization method SVRG to speed up fitting models to large datasets.</li></ul>',
	},
	{
		company: 'Be.Neuro Lab',
		time: 'May 2023 - Apr 2024',
		title: 'Research Software Engineer',
		location: 'London',
		highlights: [
			'Kickstarted the development of a <a href="https://github.com/BeNeuroLab/beneuro_experimental_data_organization">data processing pipeline and CLI tool</a> for handling experimental data recorded in the <a href="https://beneuro.ic.ac.uk">Be.Neuro Lab.</a>',
    ]
	},
	{
		company: 'Freelance for OptioPay GmbH',
		time: 'Jul 2022 - Nov 2022',
		title: 'Data Scientist',
		location: '',
		description:
			'<ul><li>Analyzed financial transactions and improved business logic using the insights gained.</li><li>Gained experience with Go, CI/CD, and microservice architectures.</li></ul>',
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
			'Analyzed neural population recordings, making use of unsupervised-, supervised-, and reinforcement learning, to understand how the coordinated activity of populations of neurons in the brain gives rise to movement under uncertainty.',
			'Built lightweight <a href="https://github.com/NeuralAnalysis/PyalData">Python</a> and <a href="https://github.com/bagibence/TrialData.jl">Julia</a> libraries for trial-based neural data analysis, and one for <a href="https://github.com/beneurolab/modular_rnn">prototyping modular RNNs</a>.',
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
      'Organized experimental data into a publicly available <a href="https://gin.g-node.org/bagibence/hidenseek_hmm">SQL database</a>.',
      '<a href="https://github.com/bagibence/hidenseek_hmm">Used state-space models</a> (switching linear dynamical systems and hidden Markov models) to study neural activity in prefrontal cortex of rats playing hide-and-seek.',
      'Showed that the models segment brain activity into meaningful states related to the rats\' behavior in an unsupervised way, and validated my results using statistical analysis and supervised decoding of behavior from neural activity.',
      'Demonstrated a novel bottom-up method for discovering what behaviors elicit changes in neural activity.',
		],
	},
	{
		school: 'PPCU, Faculty of Information Technology and Bionics',
		time: 'Sep 2013 - Jan 2017',
		degree: 'BSc, Molecular Bionics Engineering',
		location: 'Budapest',
		grade: 'Grade: honours degree',
    description: 'Multidisciplinary engineering program spanning life sciences, mathematics, and programming.',
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
		authors: 'B. Bagi, M. Brecht, J.I. Sanguinetti-Scheck',
		journal: 'Current Biology',
		time: '2022',
		link: 'https://www.cell.com/current-biology/fulltext/S0960-9822(22)00704-7',
		abstract:
      '',
		resources: [
			{
				label: 'Data',
				url: 'https://gin.g-node.org/bagibence/hidenseek_hmm',
			},
			{
				label: 'Code generating the figures',
				url: 'https://github.com/bagibence/hidenseek_hmm',
			},
		],
	},
	{
		title:
			'Hippocampal sharp wave-ripples and the associated sequence replay emerge from structured synaptic interactions in a network model of area CA3',
		authors:
			// 'András Ecker, Bence Bagi, Eszter Vértes, Orsolya Steinbach-Németh, Maria Rita Karlocai, Orsolya I. Papp, István Miklós, Norbert Hájos, Tamás Freund, Attila I. Gulyás, Szabolcs Káli',
			'A. Ecker, B. Bagi, E. Vértes, O. Steinbach-Németh, M. R. Karlocai, O. I. Papp, I. Miklós, N. Hájos, T. Freund, A. I. Gulyás, Sz. Káli',
		journal: 'eLife',
		time: '2022',
		link: 'https://elifesciences.org/articles/71850v1',
		abstract:
			'',
	},
];
