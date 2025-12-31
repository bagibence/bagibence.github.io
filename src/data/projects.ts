import type { Project } from '@/types/projects';
import hideAndSeekGraphicalAbstract from '@/assets/hide_and_seek_graphical_abstract.svg?url';
import uncertaintyVsCenterOut from '@/assets/uncertainty_vs_center_out.webp';
import evolutionaryAlgoFit from '@/assets/evolutionary_algo_fit.svg?url';

export const projects: Project[] = [
  {
    category: 'research',
    title:
      'Unsupervised discovery of behaviorally relevant brain states in rats playing hide-and-seek',
    description:
      '<a href="https://github.com/bagibence/hidenseek_hmm" target="_blank" rel="noopener noreferrer">Used state-space models</a> (switching linear dynamical systems and hidden Markov models) to study neural activity in prefrontal cortex of rats playing hide-and-seek. Showed that the models segment brain activity into meaningful states related to the rats\' behavior in an unsupervised way, and validated my results using statistical analysis and supervised decoding of behavior from neural activity. Demonstrated a novel bottom-up method for discovering what behaviors elicit changes in neural activity.',
    image: hideAndSeekGraphicalAbstract,
    imageAlt: 'Graphical abstract for hide-and-seek brain state discovery',
    time: '2022',
    supervisor: 'Prof. Dr. Michael Brecht, Dr. Juan Ignacio Sanguinetti-Scheck',
    school: 'Bernstein Center for Computational Neuroscience',
    publishedIn: 'Current Biology (2022)',
    paperUrl:
      'https://www.cell.com/current-biology/fulltext/S0960-9822(22)00704-7',
    repoUrl: 'https://github.com/bagibence/hidenseek_hmm',
    dataUrl: 'https://gin.g-node.org/bagibence/hidenseek_hmm',
  },
  {
    category: 'research',
    title: 'Neural correlates of movement planning under uncertainty',
    description:
      'Analyzed neural population recordings, making use of unsupervised, supervised, and reinforcement learning, to understand how coordinated neural activity gives rise to movement under uncertainty. Built lightweight <a href="https://github.com/NeuralAnalysis/PyalData" target="_blank" rel="noopener noreferrer">Python</a> and <a href="https://github.com/bagibence/TrialData.jl" target="_blank" rel="noopener noreferrer">Julia</a> libraries for trial-based neural data analysis, and one for <a href="https://github.com/beneurolab/modular_rnn" target="_blank" rel="noopener noreferrer">prototyping modular RNNs</a>.',
    image: uncertaintyVsCenterOut,
    imageAlt: 'Uncertainty versus center-out task comparison',
    time: 'Oct 2020 - Mar 2025',
    supervisor: 'Dr. Juan Alvaro Gallego',
    school: 'Imperial College London',
  },
  {
    category: 'lab-rotation',
    title:
      'Analysis of neural data simultaneously recorded from two visual areas in mice',
    description:
      'I reproduced the findings of <a href="https://www.cell.com/neuron/pdfExtended/S0896-6273(19)30053-4" target="_blank" rel="noopener noreferrer">Semedo et al. (Neuron, 2019)</a>, studying the communication between brain areas, testing the "communication subspace" hypothesis using reduced-rank regression.',
    time: 'Jul 2019 - Nov 2019',
    supervisor: 'Joram Keijser, Prof. Dr. Henning Sprekeler',
    school: 'Technische Universität Berlin',
  },
  {
    category: 'lab-rotation',
    title:
      'Hazard rate approach to neural population dynamics with external noise',
    description:
      'I wrote simulations in Julia to investigate how one can approximate a network of spiking neurons with noisy input using the population equations derived by <a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005507" target="_blank" rel="noopener noreferrer">Schwalger (PLOS, 2017)</a>, reducing the simulation time and computing power required.',
    time: 'Nov 2018 - Feb 2019',
    supervisor: 'Prof. Dr. Tilo Schwalger',
    school: 'Technische Universität Berlin',
  },
  {
    category: 'lab-rotation',
    title:
      'Analytical approach to heterogeneous networks of Izhikevich neurons',
    description:
      'Extending <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.5.021028" target="_blank" rel="noopener noreferrer">Montbrio et al. (PLOS, 2015)</a>, I analytically derived 3 coupled differential equations to approximate the activity of a network of Izhikevich spiking neurons, which I verified using simulations.',
    time: 'Feb 2017 - Aug 2017',
    supervisor: 'Dr. Caglar Cakan, Dr. Moritz Augustin, Prof. Dr. Obermayer',
    school: 'Technische Universität Berlin',
  },
  {
    category: 'research',
    title:
      'Simulation of hippocampal network dynamics using simplified neuronal models; systematic simplification and optimization of simplified neuronal models',
    description:
      'I compared optimization algorithms (e.g. evolutionary algorithms) for fitting spiking neuron models to electrophysiological recordings, integrated these into a spiking network model of the hippocampal CA3 region, and assisted in optimizing the network parameters to produce sharp-wave-ripples and replay.',
    image: evolutionaryAlgoFit,
    imageAlt: 'Evolutionary algorithm fit visualization',
    time: 'Jan 2016 - Jan 2017',
    supervisor: 'Dr. Szabolcs Káli',
    school:
      'Institute of Experimental Medicine, Hungarian Academy of Sciences, Budapest',
    publishedIn: 'eLife (2022)',
    paperUrl: 'https://elifesciences.org/articles/71850v1',
  },
  {
    category: 'hackathon',
    title: '10th CASSINI Hackathon',
    description:
      'Prototyped an approach for using satellite imagery to track water quality changes in Berlin’s lakes, with the potential to support <a href="http://www.visitberlin.de" target="_blank" rel="noopener noreferrer">visitBerlin</a> in promoting more sustainable activities and managing visitor pressure on polluted areas.',
    time: 'Nov 2025',
  },
  {
    category: 'software',
    title: 'Be.Neuro Lab experimental data organization',
    description:
      'Kickstarted the development of a <a href="https://github.com/BeNeuroLab/beneuro_experimental_data_organization" target="_blank" rel="noopener noreferrer">data processing pipeline and CLI tool</a> for handling experimental data recorded in the <a href="https://beneuro.ic.ac.uk" target="_blank" rel="noopener noreferrer">Be.Neuro Lab</a>.',
    time: 'May 2023 - Apr 2024',
    company: 'Be.Neuro Lab',
    repoUrl:
      'https://github.com/BeNeuroLab/beneuro_experimental_data_organization',
  },
  {
    category: 'software',
    title: 'NeMoS optimization backend migration',
    description:
      'Migrated the optimization backend of <a href="https://github.com/flatironinstitute/nemos/" target="_blank" rel="noopener noreferrer">NeMoS</a> from JAXopt to Optimistix and Optax: <a href="https://github.com/flatironinstitute/nemos/pull/365" target="_blank" rel="noopener noreferrer">designed a unified solver interface</a>, <a href="https://github.com/flatironinstitute/nemos/pull/444" target="_blank" rel="noopener noreferrer">added support for auxiliary variables</a>, and <a href="https://github.com/flatironinstitute/nemos/pull/411" target="_blank" rel="noopener noreferrer">ported FISTA and Nesterov\'s accelerated gradient</a>.',
    time: 'Feb 2025 - present',
    company: 'Freelance for The Simons Foundation',
    repoUrl: 'https://github.com/flatironinstitute/nemos/',
  },
  {
    category: 'software',
    title: 'NeMoS model selection and optimization',
    description:
      'Contributed to <a href="https://github.com/flatironinstitute/nemos" target="_blank" rel="noopener noreferrer">NeMoS</a>, a Python package for statistical models for neuroscience: <a href="https://github.com/flatironinstitute/nemos/pull/169" target="_blank" rel="noopener noreferrer">streamlined model selection by improving integration with scikit-learn</a> and <a href="https://github.com/flatironinstitute/nemos/pull/184" target="_blank" rel="noopener noreferrer">implemented SVRG</a> to speed up fitting models to large datasets.',
    time: 'Jun 2024 - Aug 2024',
    company:
      'NeuroRSE Group, Flatiron Institute Center for Computational Neuroscience',
    repoUrl: 'https://github.com/flatironinstitute/nemos/',
  },
];
