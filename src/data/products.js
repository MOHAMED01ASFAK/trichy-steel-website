import { images } from './images';

export const products = [
  {
    id: 'tmt-bars',
    name: 'TMT Bars',
    category: 'TMT Bars',
    shortDescription: 'High-strength reinforcement steel for structural reliability.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Built for demanding construction and reinforcement requirements across residential, commercial, and infrastructure work.',
    image: images.products.tmt,
    features: ['High tensile strength', 'Uniform rib pattern', 'Reliable weldability'],
    sizes: ['8mm', '10mm', '12mm', '16mm', '20mm'],
    applications: ['Slabs', 'Columns', 'Beams', 'Foundations'],
  },
  {
    id: 'steel-pipes',
    name: 'Steel Pipes',
    category: 'Steel Pipes',
    shortDescription: 'Durable piping solutions for industrial and construction use.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Suitable for a wide range of delivery, fluid handling, and structural applications.',
    image: images.products.pipes,
    features: ['Corrosion-resistant finish', 'Consistent wall thickness', 'Strong structural integrity'],
    sizes: ['25mm', '40mm', '50mm', '75mm', '100mm'],
    applications: ['Water lines', 'Structural frameworks', 'Industrial piping'],
  },
  {
    id: 'steel-sheets',
    name: 'Steel Sheets',
    category: 'Steel Sheets',
    shortDescription: 'Precision sheets for fabrication and industrial finishing.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Popular for fabrication, cladding, and custom engineering requirements.',
    image: images.products.sheets,
    features: ['Clean finish', 'Fabrication ready', 'Consistent gauge'],
    sizes: ['1mm', '1.5mm', '2mm', '3mm', '5mm'],
    applications: ['Fabrication', 'Cladding', 'Sheet metal work'],
  },
  {
    id: 'angles-channels',
    name: 'Angles & Channels',
    category: 'Angles & Channels',
    shortDescription: 'Structural components for framing, brackets and support work.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Ideal for frameworks, supports, fabricated structures, and modular installations.',
    image: images.products.angles,
    features: ['Balanced load capacity', 'Easy fabrication', 'Multiple profile options'],
    sizes: ['25x25', '40x40', '50x50', '75x40', '100x50'],
    applications: ['Frames', 'Supports', 'Structural bracing'],
  },
  {
    id: 'beams',
    name: 'Beams',
    category: 'Beams',
    shortDescription: 'Heavy-duty structural beams for wide-span performance.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Suitable for large constructions, industrial sheds, and structural frameworks.',
    image: images.products.beams,
    features: ['High load-bearing capability', 'Dimensional consistency', 'Heavy construction use'],
    sizes: ['100x50', '125x65', '150x75', '200x100'],
    applications: ['Industrial sheds', 'Structural work', 'Heavy framing'],
  },
  {
    id: 'cement',
    name: 'Cement',
    category: 'Cement',
    shortDescription: 'Reliable construction material for masonry and concrete work.',
    description:
      'Demo product content — replace with verified product specifications and manufacturer details. Designed to support general construction, masonry, and concrete projects.',
    image: images.products.cement,
    features: ['Stable strength development', 'Good workability', 'Suitable for bulk supply'],
    sizes: ['25kg bags', '50kg bags', 'Bulk loads'],
    applications: ['Concrete', 'Masonry', 'General site work'],
  },
];

export const categories = ['All', 'TMT Bars', 'Steel Pipes', 'Steel Sheets', 'Angles & Channels', 'Beams', 'Cement'];

export default products;
