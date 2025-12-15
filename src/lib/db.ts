import { User, Property, AuditLog } from './types';

// Initial Mock Data
const USERS: User[] = [
    { id: 'user-1', name: 'Alice Admin', email: 'alice@openbroker.com', role: 'SUPER_ADMIN', avatarUrl: 'https://i.pravatar.cc/150?u=alice' },
    { id: 'user-2', name: 'Roberto Gerente', email: 'bob@openbroker.com', role: 'MANAGER', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
    { id: 'user-3', name: 'Carlos Corretor', email: 'charlie@openbroker.com', role: 'AGENT', avatarUrl: 'https://i.pravatar.cc/150?u=charlie' },
];

const PROPERTIES: Property[] = [
    {
        id: 'prop-1',
        title: 'Mansão Minimalista no Jardins',
        description: 'Experimente o auge da vida moderna nesta obra-prima arquitetônica. Com espaços de convivência em conceito aberto, piscina com borda infinita e vistas panorâmicas.',
        price: 15000000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Mansão',
        location: 'São Paulo, SP',
        specs: { beds: 6, baths: 8, area: 850 },
        agentId: 'user-3',
        images: [
            'https://images.unsplash.com/photo-1600596542815-60c37c66304d?q=80&w=2075&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop', // Living
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop', // Kitchen
            'https://images.unsplash.com/photo-1600210491892-03d54cc0d578?q=80&w=2000&auto=format&fit=crop', // Bedroom
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2000&auto=format&fit=crop', // Bath
            'https://images.unsplash.com/photo-1576013551627-5cc20b368678?q=80&w=2000&auto=format&fit=crop'  // Pool
        ],
        createdAt: new Date('2024-01-15').toISOString(),
        updatedAt: new Date('2024-01-15').toISOString(),
    },
    {
        id: 'prop-2',
        title: 'Loft Industrial no Centro',
        description: 'Um loft industrial elegante no coração da cidade. Pé direito alto, tijolos expostos e grandes janelas.',
        price: 2500,
        status: 'PUBLISHED',
        listingType: 'RENT',
        type: 'Apartamento',
        location: 'Maringá, PR',
        specs: { beds: 1, baths: 1, area: 60 },
        agentId: 'user-2',
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-02-10').toISOString(),
        updatedAt: new Date('2024-02-10').toISOString(),
    },
    {
        id: 'prop-3',
        title: 'Casa de Praia Exclusiva',
        description: 'Acorde com o som das ondas nesta propriedade exclusiva à beira-mar. Acesso privado à praia.',
        price: 8500000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Casa',
        location: 'Florianópolis, SC',
        specs: { beds: 4, baths: 5, area: 450 },
        agentId: 'user-3',
        images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-03-05').toISOString(),
        updatedAt: new Date('2024-03-05').toISOString(),
    },
    {
        id: 'prop-4',
        title: 'Minha Casa Minha Vida - Zona Norte',
        description: 'Apartamento aconchegante, perfeito para sair do aluguel. Condomínio com lazer completo.',
        price: 195000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Apartamento',
        location: 'Maringá, PR',
        specs: { beds: 2, baths: 1, area: 48 },
        agentId: 'user-2',
        images: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522771753037-63336605dcc3?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502086223501-681a91e920d0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1630699144867-37acec97df5a?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-03-20').toISOString(),
        updatedAt: new Date('2024-03-20').toISOString(),
    },
    {
        id: 'prop-5',
        title: 'Cobertura Duplex Luxuosa',
        description: 'O máximo em luxo. Esta cobertura oferece vistas de 360 graus, elevador privativo e serviço de concierge.',
        price: 25000000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Cobertura',
        location: 'Curitiba, PR',
        specs: { beds: 4, baths: 5, area: 600 },
        agentId: 'user-3',
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-04-01').toISOString(),
        updatedAt: new Date('2024-04-01').toISOString(),
    },
    {
        id: 'prop-6',
        title: 'Laje Corporativa Premium',
        description: 'Andar corporativo inteiro em localização privilegiada. Infraestrutura moderna e segurança 24h.',
        price: 45000,
        status: 'PUBLISHED',
        listingType: 'RENT',
        type: 'Comercial',
        location: 'São Paulo, SP',
        specs: { beds: 0, baths: 4, area: 380 },
        agentId: 'user-1',
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-04-10').toISOString(),
        updatedAt: new Date('2024-04-10').toISOString(),
    },
    {
        id: 'prop-7',
        title: 'Terreno em Condomínio Fechado',
        description: 'Lote plano com 1000m² pronto para construir. Condomínio com clube de golfe e segurança armada.',
        price: 650000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Terreno',
        location: 'Itu, SP',
        specs: { beds: 0, baths: 0, area: 1000 },
        agentId: 'user-1',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1524813686514-a5756c97759e?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599809275337-784db60752a1?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-04-15').toISOString(),
        updatedAt: new Date('2024-04-15').toISOString(),
    },
    {
        id: 'prop-8',
        title: 'Casa Térrea Jardim Botânico',
        description: 'Linda casa térrea com 3 quartos, sendo 1 suíte. Área gourmet com churrasqueira.',
        price: 450000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Casa',
        location: 'Maringá, PR',
        specs: { beds: 3, baths: 2, area: 120 },
        agentId: 'user-2',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616594039964-40891a90c3d9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-05-10').toISOString(),
        updatedAt: new Date('2024-05-10').toISOString(),
    },
    {
        id: 'prop-9',
        title: 'Sala Comercial Centro',
        description: 'Sala comercial reformada, ideal para consultório ou escritório. Ótima localização.',
        price: 250000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Comercial',
        location: 'Maringá, PR',
        specs: { beds: 0, baths: 1, area: 45 },
        agentId: 'user-2',
        images: [
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517502884422-41e157d4433c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-05-12').toISOString(),
        updatedAt: new Date('2024-05-12').toISOString(),
    },
    {
        id: 'prop-10',
        title: 'Terreno Loteamento Novo',
        description: 'Oportunidade de investimento. Terreno em bairro planejado com grande potencial de valorização.',
        price: 120000,
        status: 'PUBLISHED',
        listingType: 'SALE',
        type: 'Terreno',
        location: 'Sarandi, PR',
        specs: { beds: 0, baths: 0, area: 300 },
        agentId: 'user-2',
        images: [
            'https://images.unsplash.com/photo-1524813686514-a5756c97759e?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599809275337-784db60752a1?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop'
        ],
        createdAt: new Date('2024-05-15').toISOString(),
        updatedAt: new Date('2024-05-15').toISOString(),
    }
];

const AUDIT_LOGS: AuditLog[] = [];

// Simulate Database interactions
export const db = {
    users: {
        getAll: () => [...USERS],
        getById: (id: string) => USERS.find(u => u.id === id),
    },
    properties: {
        getAll: () => [...PROPERTIES],
        getById: (id: string) => PROPERTIES.find(p => p.id === id),
        create: (prop: Property) => {
            PROPERTIES.push(prop);
            return prop;
        },
        update: (id: string, updates: Partial<Property>) => {
            const index = PROPERTIES.findIndex(p => p.id === id);
            if (index === -1) return null;

            // Merge updates
            const updated = {
                ...PROPERTIES[index],
                ...updates,
                specs: { ...PROPERTIES[index].specs, ...(updates.specs || {}) }, // Deep merge specs
                updatedAt: new Date().toISOString()
            };

            PROPERTIES[index] = updated;
            return updated;
        },
        delete: (id: string) => {
            const index = PROPERTIES.findIndex(p => p.id === id);
            if (index !== -1) {
                PROPERTIES.splice(index, 1);
                return true;
            }
            return false;
        }
    },
    logs: {
        getAll: () => [...AUDIT_LOGS],
        add: (log: AuditLog) => {
            AUDIT_LOGS.push(log);
            return log;
        },
        getByEntityId: (entityId: string) => AUDIT_LOGS.filter(l => l.entityId === entityId).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    }
};
