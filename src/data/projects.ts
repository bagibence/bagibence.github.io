import type { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    title:
      'Unsupervised discovery of behaviorally relevant brain states in rats playing hide-and-seek',
    description:
      '<a href="https://github.com/bagibence/hidenseek_hmm" target="_blank" rel="noopener noreferrer">Used state-space models</a> (switching linear dynamical systems and hidden Markov models) to study neural activity in prefrontal cortex of rats playing hide-and-seek. Showed that the models segment brain activity into meaningful states related to the rats\' behavior in an unsupervised way, and validated my results using statistical analysis and supervised decoding of behavior from neural activity. Demonstrated a novel bottom-up method for discovering what behaviors elicit changes in neural activity.',
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
    title:
      'Analysis of neural data simultaneously recorded from two visual areas in mice',
    description:
      'I reproduced the findings of <a href="https://www.cell.com/neuron/pdfExtended/S0896-6273(19)30053-4" target="_blank" rel="noopener noreferrer">Semedo et al. (Neuron, 2019)</a>, studying the communication between brain areas, testing the "communication subspace" hypothesis using reduced-rank regression.',
    time: 'Jul 2019 - Nov 2019',
    supervisor: 'Joram Keijser, Prof. Dr. Henning Sprekeler',
    school: 'Technische Universität Berlin',
  },
  {
    title:
      'Hazard rate approach to neural population dynamics with external noise',
    description:
      'I wrote simulations in Julia to investigate how one can approximate a network of spiking neurons with noisy input using the population equations derived by <a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005507" target="_blank" rel="noopener noreferrer">Schwalger (PLOS, 2017)</a>, reducing the simulation time and computing power required.',
    time: 'Nov 2018 - Feb 2019',
    supervisor: 'Prof. Dr. Tilo Schwalger',
    school: 'Technische Universität Berlin',
  },
  {
    title:
      'Analytical approach to heterogeneous networks of Izhikevich neurons',
    description:
      'Extending <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.5.021028" target="_blank" rel="noopener noreferrer">Montbrio et al. (PLOS, 2015)</a>, I analytically derived 3 coupled differential equations to approximate the activity of a network of Izhikevich spiking neurons, which I verified using simulations.',
    time: 'Feb 2017 - Aug 2017',
    supervisor: 'Dr. Caglar Cakan, Dr. Moritz Augustin, Prof. Dr. Obermayer',
    school: 'Technische Universität Berlin',
  },
  {
    title:
      'Simulation of hippocampal network dynamics using simplified neuronal models; systematic simplification and optimization of simplified neuronal models',
    description:
      'I compared optimization algorithms (e.g. evolutionary algorithms) for fitting spiking neuron models to electrophysiological recordings, integrated these into a spiking network model of the hippocampal CA3 region, and assisted in optimizing the network parameters to produce sharp-wave-ripples and replay.',
    time: 'Jan 2016 - Jan 2017',
    supervisor: 'Dr. Szabolcs Káli',
    school:
      'Institute of Experimental Medicine, Hungarian Academy of Sciences, Budapest',
  },
  {
    title: '10th CASSINI Hackathon',
    description:
      'Prototyped an approach for using satellite imagery to track water quality changes in Berlin’s lakes, with the potential to support <a href="http://www.visitberlin.de" target="_blank" rel="noopener noreferrer">visitBerlin</a> in promoting more sustainable activities and managing visitor pressure on polluted areas.',
    time: 'Nov 2025',
  },
];
