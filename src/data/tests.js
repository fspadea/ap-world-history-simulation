const ALL_TESTS = [
  {
    id: "sim1",
    label: "Practice Simulation 1",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        title: "Set 1 — Document: Ibn Battuta, Travels in Africa (c. 1355)",
        passage: "Ibn Battuta was a Moroccan scholar who traveled extensively across the Islamic world and beyond during the fourteenth century. The following excerpt describes his observations in the Mali Empire of West Africa.\n\n\"The inhabitants of Mali are seldom unjust, and have a greater abhorrence of injustice than any other people. There is complete security in their country. Neither traveler nor inhabitant in it has anything to fear from robbers or men of violence. They do not confiscate the property of any white man who dies in their country, even if it be uncounted wealth. On the contrary, they give it into the charge of some trustworthy person among the whites, until the rightful heir takes possession of it. They are careful to observe the hours of prayer, and assiduous in attending them in congregations, and in bringing up their children to them.\""
      },
      {
        id: "set2",
        setNum: 2,
        figureId: "sim1-set2-ottoman-empire-map",
        title: "Set 2 — Document: Ottoman Imperial Decree on Provincial Administration (c. 1560)",
        passage: "Use the map and the passage below to answer Questions 12–22.\n\nThe following is an adapted excerpt from an Ottoman imperial decree issued during the reign of Sultan Suleiman I regarding the governance of provincial territories and the responsibilities of appointed administrators.\n\n\"Let it be known that the appointed governors of each province shall ensure the collection of taxes in accordance with the law, neither demanding more than what is prescribed nor permitting the evasion of lawful obligation. The timar holders shall maintain cavalry soldiers in proportion to the revenue of their assigned lands and shall present them for military service when summoned by the imperial court. No governor shall interfere with the affairs of the religious judges, who shall adjudicate disputes according to the sacred law. The wellbeing of the subject peoples, whether Muslim or non-Muslim, is entrusted to the care of these officials, and any oppression or misrule shall be reported to the Sublime Porte for correction.\""
      },
      {
        id: "set3",
        setNum: 3,
        title: "Set 3 — Document: Bartolom\u00e9 de las Casas, A Short Account of the Destruction of the Indies (1542)",
        passage: "Bartolom\u00e9 de las Casas was a Spanish Dominican friar who became one of the earliest advocates for the rights of indigenous peoples in the Americas. The following is an adapted excerpt from his account presented to the Spanish Crown.\n\n\"The indigenous peoples of these lands are by nature the most humble, patient, and peaceable, holding no grudges, free from embroilments, neither combative nor quarrelsome. Yet our countrymen have behaved in such a way that the natives have been reduced to servitude and suffering. The Spaniards have set up systems of forced labor in the mines and on the plantations, driving the people to exhaustion and death. Entire communities have been uprooted and resettled to serve the demands of gold extraction. Where once there were thriving populations numbering in the hundreds of thousands, scarcely a few hundred remain. I beseech Your Majesty to consider the justice of these actions and to protect these innocent souls.\""
      },
      {
        id: "set4",
        setNum: 4,
        title: "Set 4 — Document: Friedrich Engels, The Condition of the Working Class in England (1845)",
        passage: "Friedrich Engels was a German philosopher and social scientist who spent time in Manchester, England, observing the conditions of industrial workers. The following is an adapted excerpt from his published observations.\n\n\"The great towns of England are the sites of the most wretched human habitation. Workers are crowded into narrow lanes and cramped courts where the air is foul and light barely penetrates. Entire families occupy single rooms in cellars that flood with every heavy rain. The factories employ men, women, and children alike for fourteen or sixteen hours at a stretch, and the wages are scarcely enough to purchase bread. The mill owners grow wealthy beyond measure while those who labor in their enterprises are worn down by disease and exhaustion before the age of forty. It is no wonder that cholera and typhus find their most willing victims in these districts.\""
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — Document: Kwame Nkrumah, Speech on African Unity (1963)",
        passage: "Kwame Nkrumah was the first president of Ghana and a leading figure in the Pan-African movement. The following is an adapted excerpt from his address at the founding conference of the Organisation of African Unity in Addis Ababa, Ethiopia.\n\n\"Africa must unite or perish. The forces that divided our continent were not of our making. Colonial boundaries were drawn in European capitals by men who had never set foot on African soil, separating peoples of common heritage and uniting those with little in common. Now that we have achieved political independence, we must not allow ourselves to be divided again by the competing interests of outside powers. The Cold War threatens to make Africa a new battleground, with East and West each seeking allies and clients among our newly sovereign states. Only through continental unity can we resist neo-colonial exploitation, develop our resources for the benefit of our own peoples, and take our rightful place among the nations of the world.\""
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: Trade Networks (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "Ibn Battuta's account of the Mali Empire most directly illustrates which of the following features of trans-Saharan trade networks?",
        choices: [
          "A", "The spread of Islam facilitated cultural exchange and common legal frameworks across West Africa",
          "B", "European merchants dominated trade relationships with West African kingdoms",
          "C", "The Mali Empire relied primarily on military conquest to maintain order within its borders",
          "D", "Trans-Saharan trade was limited to the exchange of gold and salt between North and West Africa"
        ],
        answer: "A"
      },
      {
        num: 2,
        set: 1,
        stem: "The legal protections described by Ibn Battuta for foreign merchants in Mali most closely parallel which of the following practices in other trade networks of the period?",
        choices: [
          "A", "The encomienda system established by Spanish colonizers in the Americas",
          "B", "The use of caravanserais and merchant guilds along the Silk Roads",
          "C", "The tributary relationships imposed by the Mongol Empire on conquered peoples",
          "D", "The plantation economies developed by European powers in the Caribbean"
        ],
        answer: "B"
      },
      {
        num: 3,
        set: 1,
        stem: "Which of the following best explains why Ibn Battuta was able to travel so extensively across Africa and Asia during the fourteenth century?",
        choices: [
          "A", "The Mongol Empire had unified all of Eurasia under a single political authority",
          "B", "European maritime technology had opened new sea routes connecting distant regions",
          "C", "A shared Islamic cultural and religious framework connected diverse societies across Afro-Eurasia",
          "D", "The Black Death had eliminated barriers to travel by reducing population density"
        ],
        answer: "C"
      },
      {
        num: 4,
        set: 1,
        stem: "Ibn Battuta's description of the treatment of deceased foreigners' property in Mali most directly reflects which of the following historical developments?",
        choices: [
          "A", "The adoption of Islamic legal principles governing commerce and inheritance in West Africa",
          "B", "The influence of Hindu merchant practices brought through Indian Ocean trade",
          "C", "The imposition of European commercial law through early colonial encounters",
          "D", "The development of a unique secular legal code independent of religious traditions"
        ],
        answer: "A"
      },
      {
        num: 5,
        set: 1,
        stem: "The wealth of the Mali Empire described by travelers like Ibn Battuta was most directly based on which of the following?",
        choices: [
          "A", "Control of silver mines and the export of manufactured textiles",
          "B", "Taxation of trans-Saharan trade in gold, salt, and other commodities",
          "C", "Tribute payments extracted from European trading companies",
          "D", "Revenue from a large-scale plantation agriculture system"
        ],
        answer: "B"
      },
      {
        num: 6,
        set: 1,
        stem: "A historian studying Ibn Battuta's account would most likely need to consider which of the following limitations of the source?",
        choices: [
          "A", "Ibn Battuta wrote his account decades after the events he described, relying on memory and possibly embellishment",
          "B", "Ibn Battuta had no understanding of Islamic culture and could not accurately interpret what he observed",
          "C", "The account was composed in a European language and later translated into Arabic",
          "D", "Ibn Battuta never actually visited the Mali Empire and fabricated the entire narrative"
        ],
        answer: "A"
      },
      {
        num: 7,
        set: 1,
        stem: "The emphasis on prayer and religious observance described by Ibn Battuta in Mali most directly resulted from which of the following processes?",
        choices: [
          "A", "Forced conversion campaigns conducted by North African military forces",
          "B", "Gradual adoption of Islam through trade contacts and the influence of merchant communities",
          "C", "The imposition of Christianity by Ethiopian missionaries before Islamic conversion",
          "D", "A deliberate policy by Mali rulers to replace all indigenous religious practices"
        ],
        answer: "B"
      },
      {
        num: 8,
        set: 1,
        stem: "The political and economic systems described in Ibn Battuta's account of Mali are most comparable to those of which of the following contemporary states?",
        choices: [
          "A", "The Song Dynasty in China, which relied on maritime trade and a merit-based bureaucracy",
          "B", "The Delhi Sultanate in India, which combined Islamic governance with control of trade routes",
          "C", "The Byzantine Empire, which maintained a centralized Christian theocracy",
          "D", "The Kingdom of France, which was organized around feudal obligations to a weak monarchy"
        ],
        answer: "B"
      },
      {
        num: 9,
        set: 1,
        stem: "Which of the following developments in the period 1200-1450 most directly threatened the trans-Saharan trade networks that supported empires like Mali?",
        choices: [
          "A", "The expansion of Portuguese maritime exploration along the West African coast",
          "B", "The collapse of the Roman Empire and the loss of Mediterranean trade connections",
          "C", "The establishment of the Atlantic slave trade by Dutch merchants",
          "D", "The spread of Buddhism across Central Asia"
        ],
        answer: "A"
      },
      {
        num: 10,
        set: 1,
        stem: "Ibn Battuta's reference to 'white men' in the passage most likely refers to which of the following groups?",
        choices: [
          "A", "European Christian missionaries seeking converts in West Africa",
          "B", "North African and Arab merchants engaged in trans-Saharan trade",
          "C", "Chinese emissaries sent by the Ming Dynasty to establish diplomatic relations",
          "D", "Indian traders who had crossed the Sahara from East African port cities"
        ],
        answer: "B"
      },
      {
        num: 11,
        set: 1,
        stem: "The security and legal protections described by Ibn Battuta in the Mali Empire most directly served which of the following purposes?",
        choices: [
          "A", "Preventing the spread of epidemic diseases carried by foreign merchants",
          "B", "Encouraging continued trade by creating a safe and predictable commercial environment",
          "C", "Establishing Mali's military dominance over rival West African kingdoms",
          "D", "Promoting the migration of European settlers into the interior of West Africa"
        ],
        answer: "B"
      },
      // SET 2 — Questions 12-22: Land-Based Empires (c. 1450-1750)
      {
        num: 12,
        set: 2,
        stem: "The Ottoman decree's reference to timar holders maintaining cavalry soldiers in exchange for land revenue most closely resembles which of the following systems?",
        choices: [
          "A", "The encomienda system in Spanish America",
          "B", "The European feudal system of land grants in exchange for military service",
          "C", "The Chinese civil service examination system",
          "D", "The Atlantic plantation system based on enslaved labor"
        ],
        answer: "B"
      },
      {
        num: 13,
        set: 2,
        stem: "The decree's instruction that governors must not interfere with religious judges most directly reflects which of the following features of Ottoman governance?",
        choices: [
          "A", "The complete separation of religious and political authority in the Ottoman Empire",
          "B", "The incorporation of Islamic legal traditions into the imperial administrative system",
          "C", "The Ottoman rejection of Islamic law in favor of secular European legal codes",
          "D", "The subordination of all religious authority to provincial military commanders"
        ],
        answer: "B"
      },
      {
        num: 14,
        set: 2,
        stem: "The decree's reference to the wellbeing of both Muslim and non-Muslim subjects most directly relates to which of the following Ottoman institutions?",
        choices: [
          "A", "The devshirme system, which recruited Christian boys for military and administrative service",
          "B", "The millet system, which granted religious communities a degree of self-governance",
          "C", "The janissary corps, which served as the elite infantry of the Ottoman military",
          "D", "The capitulation agreements, which gave European merchants special trading privileges"
        ],
        answer: "B"
      },
      {
        num: 15,
        set: 2,
        stem: "The centralized system of provincial oversight described in the decree is most similar to administrative practices in which of the following contemporary empires?",
        choices: [
          "A", "The Mughal Empire, which used appointed mansabdars to govern provinces on behalf of the emperor",
          "B", "The Aztec Empire, which relied entirely on local rulers governing without imperial interference",
          "C", "The Holy Roman Empire, which had a strong central authority with no regional autonomy",
          "D", "The Inca Empire, which governed exclusively through hereditary provincial nobility"
        ],
        answer: "A"
      },
      {
        num: 16,
        set: 2,
        stem: "The Ottoman practice of issuing imperial decrees to regulate provincial governance most directly served which of the following purposes?",
        choices: [
          "A", "Eliminating all forms of regional identity within the empire",
          "B", "Maintaining central control over a vast and ethnically diverse territory",
          "C", "Preparing for the empire's transition to a constitutional monarchy",
          "D", "Establishing diplomatic relations with Western European nation-states"
        ],
        answer: "B"
      },
      {
        num: 17,
        set: 2,
        stem: "Which of the following best explains a significant difference between the Ottoman timar system and the European manorial system of the medieval period?",
        choices: [
          "A", "Timar grants were revocable and assigned by the central government, while European fiefs became increasingly hereditary",
          "B", "The timar system was based on enslaved agricultural labor, while the European manorial system relied on free peasants",
          "C", "European lords had no military obligations, while timar holders served exclusively as administrators",
          "D", "The timar system existed only in urban areas, while European feudalism was exclusively rural"
        ],
        answer: "A"
      },
      {
        num: 18,
        set: 2,
        stem: "The reference to the 'Sublime Porte' in the decree is significant because it demonstrates which of the following?",
        choices: [
          "A", "The Ottoman Empire's reliance on European diplomatic conventions",
          "B", "The existence of a centralized imperial government that served as the ultimate authority",
          "C", "The Ottoman adoption of Chinese bureaucratic terminology",
          "D", "The weakness of the Ottoman sultan's authority relative to provincial governors"
        ],
        answer: "B"
      },
      {
        num: 19,
        set: 2,
        stem: "The Ottoman Empire during the reign of Suleiman I most differed from the Ming Dynasty in China in which of the following ways?",
        choices: [
          "A", "The Ottoman Empire was far more ethnically and religiously diverse than Ming China",
          "B", "The Ming Dynasty relied on military conquest while the Ottomans expanded through trade alone",
          "C", "The Ottoman Empire rejected all forms of bureaucratic administration",
          "D", "The Ming Dynasty had no system of taxation comparable to the Ottomans"
        ],
        answer: "A"
      },
      {
        num: 20,
        set: 2,
        stem: "Which of the following developments in the period 1450-1750 most directly challenged the Ottoman system of provincial administration described in the decree?",
        choices: [
          "A", "The increasing use of tax farming, which undermined centralized revenue collection",
          "B", "The adoption of Protestantism by Ottoman subject populations",
          "C", "The complete mechanization of Ottoman agriculture",
          "D", "The establishment of democratic elections for provincial governors"
        ],
        answer: "A"
      },
      {
        num: 21,
        set: 2,
        stem: "A historian could best use this Ottoman decree as evidence for which of the following claims?",
        choices: [
          "A", "The Ottoman Empire practiced complete religious tolerance with no distinctions between faiths",
          "B", "Early modern land-based empires developed sophisticated bureaucratic systems to administer diverse territories",
          "C", "The Ottoman Empire was a decentralized confederation of independent provinces",
          "D", "Islamic empires rejected all forms of secular governance in favor of purely religious law"
        ],
        answer: "B"
      },
      {
        num: 22,
        set: 2,
        stem: "The decree's emphasis on preventing oppression of subject peoples most likely reflects the Ottoman rulers' recognition that which of the following was essential for imperial stability?",
        choices: [
          "A", "Military expansion into new territories to acquire more revenue",
          "B", "The legitimacy derived from presenting the sultan as a just and protective ruler",
          "C", "Complete cultural assimilation of all conquered peoples into Turkish identity",
          "D", "The elimination of all forms of local self-governance"
        ],
        answer: "B"
      },
      // SET 3 — Questions 23-33: Columbian Exchange / Atlantic World (c. 1450-1750)
      {
        num: 23,
        set: 3,
        stem: "Las Casas's account of Spanish treatment of indigenous peoples in the Americas was most directly intended to achieve which of the following goals?",
        choices: [
          "A", "Encourage further Spanish colonization by demonstrating the wealth of the Americas",
          "B", "Persuade the Spanish Crown to reform colonial policies and protect indigenous populations",
          "C", "Promote the establishment of an independent indigenous state in the Americas",
          "D", "Advocate for the complete withdrawal of all Europeans from the Western Hemisphere"
        ],
        answer: "B"
      },
      {
        num: 24,
        set: 3,
        stem: "The forced labor systems described by Las Casas most directly developed into which of the following colonial institutions?",
        choices: [
          "A", "The mita system and encomienda, which compelled indigenous labor for Spanish colonizers",
          "B", "The headright system, which granted land to English settlers who paid for passage to America",
          "C", "The joint-stock company, which organized European commercial ventures in Asia",
          "D", "The asiento system, which regulated the importation of enslaved Africans to the Americas"
        ],
        answer: "A"
      },
      {
        num: 25,
        set: 3,
        stem: "The population decline described by Las Casas was most significantly caused by which of the following factors?",
        choices: [
          "A", "Voluntary migration of indigenous peoples to Europe and Africa",
          "B", "The introduction of Old World epidemic diseases to which indigenous peoples had no immunity",
          "C", "Widespread indigenous conversion to Christianity, which discouraged large families",
          "D", "The deliberate use of biological weapons by Spanish military forces"
        ],
        answer: "B"
      },
      {
        num: 26,
        set: 3,
        stem: "Las Casas's characterization of indigenous peoples as 'humble, patient, and peaceable' most directly reflects which of the following perspectives?",
        choices: [
          "A", "An accurate anthropological assessment of all indigenous cultures in the Americas",
          "B", "A strategic rhetorical choice designed to generate sympathy from the Spanish Crown",
          "C", "The widespread European scientific consensus about indigenous peoples during the sixteenth century",
          "D", "The views of indigenous leaders who had traveled to Spain to advocate for their own people"
        ],
        answer: "B"
      },
      {
        num: 27,
        set: 3,
        stem: "The consequences of Spanish colonization described by Las Casas most directly contributed to which of the following long-term developments?",
        choices: [
          "A", "The development of a rigid racial caste system in Spanish colonial society",
          "B", "The immediate independence of Latin American colonies from Spanish rule",
          "C", "The expansion of representative democracy throughout the Americas",
          "D", "The decline of the Atlantic slave trade due to moral objections"
        ],
        answer: "A"
      },
      {
        num: 28,
        set: 3,
        stem: "Which of the following was a direct economic consequence of the extraction of gold and silver from the Americas as described by Las Casas?",
        choices: [
          "A", "A decrease in European trade with Asia due to the abundance of American precious metals",
          "B", "A period of significant inflation in Europe and the integration of the Americas into the global economy",
          "C", "The collapse of the Spanish monarchy due to the high cost of transatlantic shipping",
          "D", "The development of paper currency systems throughout Western Europe"
        ],
        answer: "B"
      },
      {
        num: 29,
        set: 3,
        stem: "Las Casas's arguments most directly influenced which of the following?",
        choices: [
          "A", "The Protestant Reformation and its critique of Catholic authority",
          "B", "The debate over the legal and moral status of indigenous peoples, including the Valladolid debate of 1550-1551",
          "C", "The French Revolution and its emphasis on universal rights",
          "D", "The English Civil War and the development of parliamentary sovereignty"
        ],
        answer: "B"
      },
      {
        num: 30,
        set: 3,
        stem: "Which of the following groups would have been most likely to oppose the reforms advocated by Las Casas?",
        choices: [
          "A", "Spanish encomenderos who profited from indigenous forced labor",
          "B", "Indigenous leaders seeking to preserve their communities",
          "C", "Dominican and Franciscan missionaries working among indigenous peoples",
          "D", "The Spanish Crown, which had no interest in colonial revenue"
        ],
        answer: "A"
      },
      {
        num: 31,
        set: 3,
        stem: "The Columbian Exchange, as partially illustrated by Las Casas's account, resulted in which of the following global developments?",
        choices: [
          "A", "The transfer of plants, animals, and diseases between the Eastern and Western Hemispheres, fundamentally altering global ecosystems",
          "B", "The establishment of direct trade routes between the Americas and China, bypassing Europe entirely",
          "C", "The elimination of all epidemic diseases in both the Old and New Worlds",
          "D", "The complete replacement of European crops with American agricultural products"
        ],
        answer: "A"
      },
      {
        num: 32,
        set: 3,
        stem: "The demographic collapse of indigenous populations described by Las Casas most directly led to which of the following developments in the Atlantic world?",
        choices: [
          "A", "The end of European demand for labor in the Americas",
          "B", "The increased importation of enslaved Africans to replace indigenous laborers",
          "C", "The voluntary return of Spanish colonists to Europe",
          "D", "The development of fully mechanized agricultural production in the Americas"
        ],
        answer: "B"
      },
      {
        num: 33,
        set: 3,
        stem: "A historian would most likely characterize Las Casas's account as reflecting which of the following broader intellectual trends of the sixteenth century?",
        choices: [
          "A", "The Scientific Revolution's emphasis on empirical observation and data collection",
          "B", "The humanist concern with justice and the moral responsibilities of Christian rulers",
          "C", "The Enlightenment's advocacy for democratic governance and individual rights",
          "D", "The mercantilist argument for maximizing colonial economic output"
        ],
        answer: "B"
      },
      // SET 4 — Questions 34-44: Industrial Revolution & Imperialism (c. 1750-1900)
      {
        num: 34,
        set: 4,
        stem: "Engels's description of working conditions in English factories most directly illustrates which of the following consequences of the Industrial Revolution?",
        choices: [
          "A", "The improvement of public health through advances in medical science",
          "B", "The concentration of wealth and the exploitation of industrial laborers",
          "C", "The decline of urbanization as workers returned to agricultural employment",
          "D", "The establishment of government-mandated minimum wages and working conditions"
        ],
        answer: "B"
      },
      {
        num: 35,
        set: 4,
        stem: "The housing conditions described by Engels most directly resulted from which of the following developments?",
        choices: [
          "A", "Deliberate government policies to relocate rural populations to urban slums",
          "B", "Rapid urbanization driven by the movement of workers from rural areas to factory towns",
          "C", "The destruction of urban housing during the Napoleonic Wars",
          "D", "The voluntary preference of workers for crowded living conditions near factories"
        ],
        answer: "B"
      },
      {
        num: 36,
        set: 4,
        stem: "Engels's observations about the use of child labor in factories most directly contributed to which of the following later developments?",
        choices: [
          "A", "The abolition of slavery throughout the British Empire",
          "B", "The passage of factory reform legislation restricting working hours and child labor",
          "C", "The establishment of universal suffrage for all adult citizens in Britain",
          "D", "The complete mechanization of industry, eliminating the need for human labor"
        ],
        answer: "B"
      },
      {
        num: 37,
        set: 4,
        stem: "Engels's argument that factory owners grew wealthy at the expense of workers most directly reflects which of the following ideological perspectives?",
        choices: [
          "A", "Classical liberalism, which emphasized free markets and individual economic freedom",
          "B", "Social Darwinism, which argued that economic inequality was natural and beneficial",
          "C", "Socialist critique of capitalism, which identified class conflict as central to industrial society",
          "D", "Mercantilism, which prioritized state accumulation of wealth through colonial trade"
        ],
        answer: "C"
      },
      {
        num: 38,
        set: 4,
        stem: "The spread of epidemic diseases such as cholera in industrial cities, as mentioned by Engels, was most directly caused by which of the following?",
        choices: [
          "A", "The importation of tropical diseases from colonial territories in Africa and Asia",
          "B", "Inadequate sanitation infrastructure and contaminated water supplies in rapidly growing urban areas",
          "C", "The deliberate introduction of pathogens by rival European powers",
          "D", "The decline of traditional herbal medicine in favor of industrial pharmaceuticals"
        ],
        answer: "B"
      },
      {
        num: 39,
        set: 4,
        stem: "Which of the following groups would have most likely agreed with Engels's critique of industrial capitalism?",
        choices: [
          "A", "Members of the Chartist movement who advocated for working-class political representation",
          "B", "Supporters of the Corn Laws who sought to protect agricultural interests",
          "C", "Factory owners who promoted laissez-faire economic policies",
          "D", "Advocates of the civilizing mission who supported European imperialism"
        ],
        answer: "A"
      },
      {
        num: 40,
        set: 4,
        stem: "The conditions described by Engels in England were most closely paralleled in which of the following contemporary developments?",
        choices: [
          "A", "The expansion of the Ottoman Empire into southeastern Europe",
          "B", "The development of textile manufacturing and industrial labor in Japan during the Meiji era",
          "C", "The spread of subsistence agriculture in sub-Saharan Africa",
          "D", "The decline of maritime trade in the Indian Ocean region"
        ],
        answer: "B"
      },
      {
        num: 41,
        set: 4,
        stem: "The economic system critiqued by Engels most directly depended on which of the following technological developments?",
        choices: [
          "A", "The invention of the printing press and the spread of literacy",
          "B", "The development of steam power and mechanized textile production",
          "C", "The construction of transcontinental railroad networks in North America",
          "D", "The adoption of gunpowder weapons by European armies"
        ],
        answer: "B"
      },
      {
        num: 42,
        set: 4,
        stem: "The wealth generated by British industrialization, as described by Engels, most directly fueled which of the following global developments?",
        choices: [
          "A", "The decline of British naval power and the rise of Russian maritime dominance",
          "B", "European imperialist expansion into Africa and Asia during the nineteenth century",
          "C", "The peaceful unification of Germany under Prussian diplomatic leadership",
          "D", "The abolition of all forms of unfree labor throughout the global economy"
        ],
        answer: "B"
      },
      {
        num: 43,
        set: 4,
        stem: "A historian analyzing Engels's account should most importantly consider which of the following about the source?",
        choices: [
          "A", "Engels was a wealthy industrialist with no personal experience of working-class life",
          "B", "Engels wrote with the explicit political purpose of advocating for the overthrow of capitalism",
          "C", "Engels's observations were limited to a single factory and cannot be generalized",
          "D", "Engels published his work decades after the conditions he described had been entirely eliminated"
        ],
        answer: "B"
      },
      {
        num: 44,
        set: 4,
        stem: "Which of the following best describes a significant difference between the labor systems described by Engels and those described by Las Casas in Set 3?",
        choices: [
          "A", "Industrial wage labor was technically voluntary, while colonial forced labor was explicitly coerced",
          "B", "Colonial laborers received higher wages than English factory workers",
          "C", "English factory workers were enslaved, while indigenous Americans were paid laborers",
          "D", "Industrial labor was limited to adult men, while colonial labor included only women and children"
        ],
        answer: "A"
      },
      // SET 5 — Questions 45-55: 20th Century
      {
        num: 45,
        set: 5,
        stem: "Nkrumah's speech most directly reflects which of the following historical developments of the mid-twentieth century?",
        choices: [
          "A", "The expansion of European colonial empires into new African territories",
          "B", "The wave of decolonization that created newly independent nation-states across Africa",
          "C", "The reunification of previously divided European nation-states",
          "D", "The decline of nationalist movements in favor of global economic integration"
        ],
        answer: "B"
      },
      {
        num: 46,
        set: 5,
        stem: "Nkrumah's criticism of colonial boundaries most directly addresses which of the following legacies of European imperialism in Africa?",
        choices: [
          "A", "The introduction of cash crop agriculture that damaged African ecosystems",
          "B", "The arbitrary division of ethnic and cultural groups by borders drawn at the Berlin Conference of 1884-1885",
          "C", "The establishment of democratic institutions that functioned effectively after independence",
          "D", "The creation of unified national identities within each colonial territory"
        ],
        answer: "B"
      },
      {
        num: 47,
        set: 5,
        stem: "Nkrumah's warning about the Cold War's impact on Africa most directly relates to which of the following?",
        choices: [
          "A", "The use of nuclear weapons against African nations during proxy conflicts",
          "B", "The competition between the United States and the Soviet Union for influence in newly independent nations",
          "C", "The establishment of NATO military bases throughout sub-Saharan Africa",
          "D", "The complete isolation of Africa from all international economic and political systems"
        ],
        answer: "B"
      },
      {
        num: 48,
        set: 5,
        stem: "Nkrumah's call for African unity most closely aligns with which of the following broader ideological movements?",
        choices: [
          "A", "Pan-Africanism, which advocated for solidarity and cooperation among people of African descent",
          "B", "Social Darwinism, which argued for competition among nations as a driver of progress",
          "C", "Fascism, which emphasized authoritarian nationalism and racial superiority",
          "D", "Classical liberalism, which promoted free trade and minimal government intervention"
        ],
        answer: "A"
      },
      {
        num: 49,
        set: 5,
        stem: "The concept of 'neo-colonial exploitation' referenced by Nkrumah most directly describes which of the following?",
        choices: [
          "A", "The continued economic dominance of former colonial powers over newly independent nations through trade agreements and financial control",
          "B", "The re-establishment of formal colonial governments in Africa during the 1960s",
          "C", "The voluntary economic integration of African nations into the European Common Market",
          "D", "The complete economic self-sufficiency achieved by African nations immediately after independence"
        ],
        answer: "A"
      },
      {
        num: 50,
        set: 5,
        stem: "Nkrumah's speech at the founding of the Organisation of African Unity most directly led to which of the following outcomes?",
        choices: [
          "A", "The immediate political unification of all African states into a single federation",
          "B", "The creation of a continental organization promoting cooperation among independent African states",
          "C", "The complete withdrawal of all foreign economic interests from the African continent",
          "D", "The establishment of a unified African military force that ended all civil conflicts"
        ],
        answer: "B"
      },
      {
        num: 51,
        set: 5,
        stem: "Which of the following events most directly influenced Nkrumah's perspective on the dangers of outside interference in African affairs?",
        choices: [
          "A", "The assassination of Patrice Lumumba and the political crisis in the Congo, which involved Cold War powers",
          "B", "The partition of India in 1947 and the subsequent communal violence",
          "C", "The Cuban Revolution of 1959 and Fidel Castro's rise to power",
          "D", "The formation of the European Economic Community in 1957"
        ],
        answer: "A"
      },
      {
        num: 52,
        set: 5,
        stem: "Nkrumah's argument that African resources should benefit African peoples most directly challenged which of the following economic relationships?",
        choices: [
          "A", "Intra-African trade networks that had existed since the precolonial period",
          "B", "The extraction of raw materials from Africa for processing and profit in industrialized nations",
          "C", "The importation of manufactured goods from other developing nations in Asia",
          "D", "The barter-based economies that characterized precolonial African societies"
        ],
        answer: "B"
      },
      {
        num: 53,
        set: 5,
        stem: "The Non-Aligned Movement, which several African nations joined during the period of Nkrumah's speech, was most directly a response to which of the following?",
        choices: [
          "A", "The threat of nuclear war between the United States and the Soviet Union",
          "B", "The pressure on newly independent nations to align with either the Western or Eastern bloc during the Cold War",
          "C", "The expansion of the European Union and its economic influence in Africa",
          "D", "The establishment of international free trade agreements that disadvantaged developing nations"
        ],
        answer: "B"
      },
      {
        num: 54,
        set: 5,
        stem: "Which of the following best describes a significant challenge faced by African nations in achieving the unity Nkrumah advocated?",
        choices: [
          "A", "The absence of any shared cultural or linguistic traditions across the African continent",
          "B", "Competing national interests, ethnic divisions, and the influence of Cold War superpowers",
          "C", "The unwillingness of any African leader to support continental cooperation",
          "D", "The continued formal colonial rule over the majority of African territories into the 1990s"
        ],
        answer: "B"
      },
      {
        num: 55,
        set: 5,
        stem: "Nkrumah's emphasis on the artificial nature of colonial boundaries is most directly relevant to understanding which of the following late-twentieth-century developments?",
        choices: [
          "A", "The economic rise of East Asian nations such as South Korea and Taiwan",
          "B", "Ethnic and civil conflicts in post-colonial African states, including the Rwandan genocide",
          "C", "The collapse of the Soviet Union and the end of the Cold War",
          "D", "The expansion of the European Union to include Eastern European nations"
        ],
        answer: "B"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, trade networks
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Indian Ocean Trade Networks",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Zhao Rugua, Description of Foreign Peoples (c. 1225)",
            description: "Zhao Rugua was a Chinese official who served as Inspector of Foreign Trade in the port city of Quanzhou during the Southern Song Dynasty. His work compiled information about foreign lands and trade goods based on interviews with merchants.",
            text: "The country of the Arabs is powerful and its people numerous. Whenever a foreign trading ship enters their waters and drops anchor, officials in small boats come aboard to examine the cargo and levy duties. The merchants then transfer their goods to warehouses. The country produces frankincense, myrrh, dragon's blood, aloes, liquid storax, and many other aromatics. The Arab merchants are shrewd and capable traders who travel widely. They carry goods by sea to the markets of India, Southeast Asia, and China, and they bring back silk, porcelain, and iron in exchange. Their ships are large, constructed with iron nails, and can carry several hundred men."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way the source illustrates the nature of Indian Ocean trade in the period c. 1200-1450." },
          { letter: "B", prompt: "Explain ONE way that Indian Ocean trade networks affected the political or economic development of states in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE significant difference between Indian Ocean trade networks and trans-Saharan trade networks in the period c. 1200-1450." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes one way the source illustrates Indian Ocean trade, such as the exchange of luxury goods (aromatics, silk, porcelain), the role of Arab merchants as intermediaries, or the regulation of trade by state officials." },
          { row: "B", category: "Part B", points: 1, description: "Explains one political or economic effect, such as the growth of wealthy port cities (Kilwa, Calicut, Quanzhou), the rise of merchant classes influencing politics, or the expansion of state revenue through trade taxation." },
          { row: "C", category: "Part C", points: 1, description: "Explains a significant difference, such as maritime vs. overland routes, the types of goods traded, the role of monsoon winds vs. camel caravans, or the geographic regions connected by each network." }
        ]
      },
      // SAQ 2 — Secondary source, state-building / empires
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — State-Building in the Early Modern Period",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source 1",
            title: "Mughal miniature painting depicting Emperor Akbar holding court (durbar), c. 1590",
            description: "This Mughal miniature painting shows Emperor Akbar presiding over his court, surrounded by Hindu and Muslim officials and courtiers.",
            figureId: "sim1-saq2-mughal-miniature",
            text: ""
          },
          {
            label: "Source 2",
            title: "John Darwin, After Tamerlane: The Rise and Fall of Global Empires (2008)",
            description: "John Darwin is a British historian who has written extensively on the history of global empires. This excerpt is from his comparative study of imperial state-building.",
            text: "The great land-based empires of the early modern period \u2014 the Ottoman, Safavid, Mughal, and Qing \u2014 all faced a common set of challenges in governing their vast and diverse territories. Each relied on a combination of military force, bureaucratic administration, and the strategic accommodation of local elites and religious traditions. The success of these empires depended not merely on their capacity for conquest, but on their ability to create systems of governance that generated loyalty, or at least acquiescence, among subject populations. Where emperors failed to balance centralized authority with local autonomy, as in the later Mughal period, the result was provincial rebellion and imperial fragmentation."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE specific example of how a land-based empire in the period c. 1450-1750 used bureaucratic administration to govern diverse populations." },
          { letter: "B", prompt: "Explain ONE way that the 'strategic accommodation of local elites and religious traditions' contributed to the stability of a specific empire in the period c. 1450-1750." },
          { letter: "C", prompt: "Explain ONE way that the failure to maintain a balance between centralized authority and local autonomy led to the decline of a specific empire." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific example such as the Ottoman devshirme and millet system, the Mughal mansabdari system, or the Qing use of the examination system and Manchu-Chinese dual administration." },
          { row: "B", category: "Part B", points: 1, description: "Explains how accommodation contributed to stability, such as the Ottoman millet system allowing religious self-governance, the Mughal policy of religious tolerance under Akbar, or Qing adoption of Confucian rituals." },
          { row: "C", category: "Part C", points: 1, description: "Explains a specific example of decline, such as Aurangzeb's religious intolerance weakening Mughal authority, the decentralization of Ottoman provincial governance, or Qing failure to integrate peripheral regions." }
        ]
      },
      // SAQ 3 — No stimulus, cultural/religious developments (c. 1200-1450)
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Cultural and Religious Developments (c. 1200-1450)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that the spread of Islam influenced cultural or intellectual developments in Afro-Eurasia in the period c. 1200-1450." },
          { letter: "B", prompt: "Explain ONE way that the spread of Buddhism influenced political or social structures in East or Southeast Asia in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE significant similarity between the spread of Islam and the spread of Buddhism in the period c. 1200-1450." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes one cultural or intellectual effect of Islam's spread, such as the development of centers of learning (Timbuktu, Cairo), the spread of Arabic as a language of scholarship, or the adoption of Islamic art and architectural styles." },
          { row: "B", category: "Part B", points: 1, description: "Explains one political or social effect, such as Theravada Buddhism's influence on kingship in Southeast Asian states, the role of Buddhist monasteries as centers of education and political influence, or Buddhist syncretism with local traditions." },
          { row: "C", category: "Part C", points: 1, description: "Explains a similarity, such as both religions spreading through trade networks and merchant communities, both adapting to local cultural practices (syncretism), or both providing frameworks for political legitimacy." }
        ]
      },
      // SAQ 4 — No stimulus, revolutions / political change (c. 1750-1900)
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Revolutions and Political Change (c. 1750-1900)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE cause of the Haitian Revolution (1791-1804)." },
          { letter: "B", prompt: "Explain ONE way that the Haitian Revolution influenced subsequent independence movements in Latin America." },
          { letter: "C", prompt: "Explain ONE significant difference between the Haitian Revolution and the French Revolution in terms of their causes or outcomes." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a cause such as the brutal conditions of the plantation slave system in Saint-Domingue, the influence of Enlightenment ideas about natural rights, the social tensions among whites, free people of color, and enslaved people, or the instability created by the French Revolution." },
          { row: "B", category: "Part B", points: 1, description: "Explains an influence such as inspiring enslaved and free people of color elsewhere, demonstrating that colonial independence was achievable, Sim\u00f3n Bol\u00edvar receiving aid from Haiti, or causing fear among slaveholders that delayed abolition in some regions." },
          { row: "C", category: "Part C", points: 1, description: "Explains a difference such as the Haitian Revolution being led by enslaved people while the French Revolution was led by the bourgeoisie, Haiti achieving both independence and abolition of slavery while France maintained its colonial empire, or the international isolation Haiti faced after independence." }
        ]
      },
      // DBQ — Maritime empires and global trade (c. 1450-1750)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which maritime empires transformed global trade networks in the period c. 1450-1750.",
        documents: [
          {
            num: 1,
            source: "Afonso de Albuquerque, Letter to King Manuel I of Portugal (1510)",
            figureId: "sim1-dbq-doc3-portuguese-carrack",
            text: "If Your Highness seizes Goa and Malacca, then Cairo and Mecca will be entirely ruined, and Venice will receive no spices unless her merchants go and buy them in Portugal. I am certain that if we take this trade of Malacca away from the Moors, they will have no means of carrying it on, for they have no other route by which they can transport spices to their own lands. Your Highness will thus control the commerce of the whole of the East."
          },
          {
            num: 2,
            source: "Tomé Pires, The Suma Oriental (c. 1515)",
            text: "Malacca is a city of tremendous importance for trade. Whoever is lord of Malacca has his hand on the throat of Venice. The trade goods that pass through this port include cloves from the Moluccas, sandalwood from Timor, nutmeg and mace from Banda, camphor from Borneo, pepper from the Malabar coast, and porcelain and silk from China. Before the Portuguese arrived, the merchants of many nations \u2014 Gujaratis, Javanese, Chinese, Arabs, and Persians \u2014 conducted their trade here freely under the protection of the Sultan."
          },
          {
            num: 3,
            source: "Spanish Royal Decree Establishing the Manila Galleon Trade (1593)",
            text: "It is hereby ordered that a regular trade route shall be established between the port of Acapulco in New Spain and the city of Manila in the Philippine Islands. Ships shall carry silver from the mines of New Spain to Manila, where it shall be exchanged for Chinese silk, porcelain, spices, and other goods of the Orient. This trade shall be conducted under the supervision of royal officials, and the volume of goods shipped shall not exceed the authorized limit so as to protect the merchants of Seville."
          },
          {
            num: 4,
            source: "Jan Pieterszoon Coen, Letter to the Directors of the Dutch East India Company (1619)",
            figureId: "sim1-dbq-doc6-dutch-batavia",
            text: "Your Honors should know by experience that trade in Asia must be driven and maintained under the protection and favor of Your Honors' own weapons, and that the weapons must be paid for by the profits from the trade, so that we cannot carry on trade without war nor war without trade. We must establish ourselves firmly in the Spice Islands and drive out the English and all other competitors. The native peoples must be compelled to deliver their spices exclusively to our company at prices that we determine."
          },
          {
            num: 5,
            source: "Emperor Kangxi of China, Edict on Maritime Trade Restrictions (1717)",
            text: "Chinese merchants who venture to Southeast Asia for trade have been causing disturbances. Henceforth, Chinese subjects are forbidden from traveling overseas to trade. Foreign merchants may continue to bring their goods to the designated port of Canton, where they will be supervised by appointed officials. Ships from the Western Ocean nations that come to trade must comply with the regulations of the Co-hong merchants and may not conduct business freely with the common people."
          },
          {
            num: 6,
            source: "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano (1789)",
            figureId: "sim1-dbq-doc5-atlantic-slave-trade",
            text: "When I arrived at the coast, I was immediately handled and tossed up to see if I were sound by some of the crew. I was soon put down under the decks, and there I received such a salutation in my nostrils as I had never experienced in my life. The closeness of the place and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable."
          },
          {
            num: 7,
            source: "Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations (1776)",
            text: "The discovery of America and that of a passage to the East Indies by the Cape of Good Hope are the two greatest and most important events recorded in the history of mankind. Their consequences have already been very great, but the full extent of their consequences cannot yet be foreseen. By uniting the most distant parts of the world, they have enabled the different nations to relieve one another's wants, to increase one another's enjoyments, and to encourage one another's industry."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — State-building and political power
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, evaluate the extent to which states in Afro-Eurasia used religious or ideological systems to legitimize and consolidate political power." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which land-based empires used bureaucratic institutions to legitimize and consolidate political power." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which nationalist ideologies were used to legitimize and consolidate political power." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 1: Official 2025 Set 1
  // ========================================================================
  {
    id: "official-2025-s1",
    label: "2025 Set 1 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2025 Set 1 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2025,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Jack Weatherford, United States anthropologist, academic book, 1988",
            description: "",
            text: "Asia experienced a temporary gain from the discovery of America, but Africa suffered. America had all the silver and gold Europe needed, and this destroyed the African gold markets and the dependent trade networks. Cities such as Timbuktu and the Songhai Empire of which it was a part crumbled as merchants abandoned the ancient trade routes.\n\nTo replace the Mediterranean trade of cloth, beads, leather, and metals upon which the Africans had become dependent, the Africans now had only one commodity that the Europeans wanted\u2014slaves. For centuries the African merchants had sold a small but steady number of slaves to the Middle East, but with the decline of their traditional European trade and with the opening of America, the slave trade became a boom. The Africans thus became victims of the discovery of America as surely as did the American Indians."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify one claim that the author makes in the first paragraph about the effect of the discovery of the Americas on Africa." },
          { letter: "B", prompt: "Describe one economic change in the Americas that occurred as a result of the developments discussed in the second paragraph." },
          { letter: "C", prompt: "Explain one reason why \"American Indians\" \"became victims of the discovery of America\" as suggested by the author in the last sentence of the passage." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies one claim such as: the discovery of America destroyed African gold markets, trade networks declined, or cities like Timbuktu crumbled." },
          { row: "B", category: "Part B", points: 1, description: "Describes an economic change such as the growth of plantation economies using enslaved labor, the extraction of silver and gold, or the development of the Atlantic trade system." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as the spread of European diseases devastating Indigenous populations, forced labor systems like the encomienda, or the displacement and conquest of Indigenous peoples." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Louise Otto-Peters, German writer, first issue of the Women's Newspaper, the first women's newspaper published in Germany, 1849. The newspaper was banned by the government in Saxony, Germany.",
            description: "",
            text: "History teaches us that those who forget to think about themselves will be forgotten by others! It is this principle that prompts me to publish a women's newspaper.\n\nMy sisters, join me so that we shall not be left behind while everyone else around us is pushing forward. We demand the right to cultivate our human potential and the right to act independently in the state.\n\nWe want to spread the great ideas of liberty and humanity through every avenue open to us. To the wider world, we want to spread these ideas through the press. Within the narrower world of our families, we want to spread these ideas through example, instruction, and child-rearing.\n\nWe want to earn our liberty and humanity, not by striving individually\u2014each one for herself\u2014but rather by looking after those who languish forgotten and neglected in poverty, misery, and ignorance\u2014each for all."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify one likely audience for the claims that the author makes in the passage." },
          { letter: "B", prompt: "Describe one historical context during the nineteenth century that explains the increased poverty and misery referred to in the fourth paragraph." },
          { letter: "C", prompt: "Explain how one ideology or set of ideas likely influenced the author's claims in the passage." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a likely audience such as German women, educated middle-class women, or reformers sympathetic to women's rights." },
          { row: "B", category: "Part B", points: 1, description: "Describes a historical context such as industrialization leading to poor working conditions, urbanization and poverty, or the revolutions of 1848 and their aftermath." },
          { row: "C", category: "Part C", points: 1, description: "Explains the influence of an ideology such as Enlightenment ideas about natural rights, early feminism, socialism, or liberal reform movements." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify one technological or military factor that contributed to the expansion of Muslim empires such as the Ottoman, Safavid, or Mughal Empires during the period circa 1300 to 1600." },
          { letter: "B", prompt: "Explain one way that Muslim rulers during the period circa 1300 to 1600 used economic policies to generate revenue for their states or empires." },
          { letter: "C", prompt: "Explain one reason why some Muslim rulers during the period circa 1300 to 1600 adopted tolerant policies toward religious or ethnic minorities in their states or empires." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a factor such as the use of gunpowder weapons, cannons, or muskets that gave military advantages." },
          { row: "B", category: "Part B", points: 1, description: "Explains an economic policy such as taxation of trade, the jizya tax on non-Muslims, or control of key trade routes." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as maintaining social stability, encouraging economic productivity among diverse populations, or legitimizing rule over religiously diverse territories." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify one factor that contributed to the outbreak of revolutions in the period circa 1750 to 1900." },
          { letter: "B", prompt: "Explain one way that revolutionary movements used ideologies in their attempts to change societies during the period circa 1750 to 1900." },
          { letter: "C", prompt: "Explain one way in which revolutionary movements were challenged as they attempted to change societies during the period circa 1750 to 1900." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a factor such as Enlightenment ideas, economic inequality, taxation without representation, or social stratification." },
          { row: "B", category: "Part B", points: 1, description: "Explains how ideologies were used such as Enlightenment concepts of natural rights in the French Revolution, liberalism in Latin American independence movements, or nationalism in European revolutions." },
          { row: "C", category: "Part C", points: 1, description: "Explains a challenge such as conservative backlash, foreign intervention, internal divisions, or the difficulty of implementing revolutionary ideals." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which new transportation and/or communication technologies affected African societies during the period circa 1850 to 1960.",
        figureId: "2025s1-dbq-map-africa",
        documents: [
          {
            num: 1,
            source: "Bai Bureh and other leaders of the Temne people in Sierra Leone (in West Africa), letter to the British colonial authorities of Sierra Leone, 1896",
            text: "We received a letter from the colonial Governor sent to tell us that the British Queen now takes the whole of Temne country. We read the Governor's letter and we now know the law that the Governor puts on us; namely, that we are to pay a tax on our houses each year so the Government can build roads and a rail line. ... But we must inform you that we are not able to pay a tax for our own houses because we have no power and no money to do so. So please tell the Governor we beg him not to impose the tax and to consider the old agreement he made with our fathers.\n\nFootnote: The British colonial authorities attempted to impose a \"hut tax\" on each African household in Sierra Leone to raise money for transportation projects."
          },
          {
            num: 2,
            source: "William Douglas Mackenzie, Protestant minister born in South Africa who later emigrated to the United States, image from his illustrated book South Africa: Its History, Heroes and Wars, published in Chicago, 1899",
            figureId: "2025s1-dbq-doc2-mine-workers",
            text: "The photograph shows two African employees of the Kimberley Diamond mines in South Africa. The caption reads: \"GOING HOME FROM THE MINES. These two Bechuanas [members of the Tswana people of southern Africa] have been working at Kimberley or Johannesburg, have received their pay in the golden coin of the British realm, and are traveling on their road from 100 to 400 miles to their distant home. They carry a few trophies purchased in the great city, and reckon themselves as they approach their own town among the heroes and wise men of their tribe.\""
          },
          {
            num: 3,
            source: "Exchange of telegrams between William Low, British colonial official in Gold Coast (present-day Ghana), and British Colonial Secretary Joseph Chamberlain in London, 1900",
            text: "[April 30, 1900; Low to Chamberlain]: Update on the fighting against the Ashanti \u2014 Ashanti warriors launched a serious attack on a telegraph clerk while he was repairing telegraph lines that had previously been severed by the Ashanti. Other telegraph clerks report Ashanti troops have effectively blockaded the main road to the city of Kumasi since April 25th. Government troops from Lagos [in Nigeria] were sent to Kumasi. We hope that they will succeed in reopening communications.\n\n[May 1, 1900; Chamberlain to Low]: In response to your telegram of April 30th, we will be sending 250 more troops from southern Nigeria to Kumasi to counter Ashanti attacks. I will also send 50 additional Frontier Police from Sierra Leone to the Ashanti territories for protection of British life and property.\n\nFootnote: The Ashanti Empire was an African state adjacent to the British Gold Coast colony, whose rulers fought five wars of resistance against British colonial expansion during the nineteenth century."
          },
          {
            num: 4,
            source: "Peninsular and Oriental Steam Navigation Company (P&O), a British shipping company that provided passenger and freight service from Great Britain to many parts of the world, an advertising brochure for travelers on P&O's ships to Egypt, 1908",
            text: "As we leave the ship at Alexandria and board the train to Cairo, we may observe simple farm and rural scenes but also, here and there, the huge new cotton mills that remind us that Egypt is progressive and up to date.\n\nCairo has changed greatly since 1882, and it is inevitable that, in a country so closely in touch with Western civilization, many traditional local shops have been replaced by storefronts with large windows displaying products of European industry. In the west end of Cairo huge hotels and commercial buildings have replaced the former delightful residences of the elite. In the hotels, the vibrant social life of modern Cairo is in full swing, making the city attractive to many.\n\nFootnote: Beginning in 1882, Great Britain effectively controlled Egypt without formally colonizing the country."
          },
          {
            num: 5,
            source: "British Parliamentary Commission appointed to investigate the spread of tuberculosis in South Africa, report of its findings presented to the British Parliament, 1914",
            text: "In those towns which were the first to be opened up by the railway, the disease of tuberculosis has prevailed the longest and to the greatest extent.\n\nThe opening up of South Africa as a result of the development of diamond and gold mining has led to the creation of labor centers and the clustering of the African and mixed-race populations in towns and in separate workers' quarters, where the conditions of housing and general health have been bad in the extreme. For the first time, increasing numbers of Africans are crowding into urban centers in search of work that dire economic conditions and expanding needs are forcing them to undertake.\n\nWith these changes have come changes in habits, in clothing, and in diet, the adoption of European vices, and exposure to unhealthy conditions of labor in mines and elsewhere.... It is evident that the rise of industry has produced exactly those conditions that can best account for the spread of tuberculosis in South Africa."
          },
          {
            num: 6,
            source: "William Claridge and Hugh Clifford, British colonial officials employed in the colony of Gold Coast (present-day Ghana), A History of the Gold Coast and Ashanti, book published in London, 1915",
            text: "The completion of the railway from [the port] of Sekondi to Kumasi in 1903 has been followed by the construction of another line from [the port of] Accra to the cocoa-bearing districts, and these two lines have enormously facilitated trade. The first line has also been responsible for the establishment of numerous European trading firms in Kumasi, which has become a great trading center.\n\nThe abolition of the slave trade and the acquisition of most of the gold-bearing lands in the colony by European entrepreneurs has caused the local people to seek work in timber, rubber collecting, and agriculture, which the Government has encouraged by holding agricultural shows and providing traveling instructors to assist farmers with expert advice.\n\nA submarine cable to England was connected in July 1886, and telegraphic communication between different parts of the country has been extended even to the northern districts."
          },
          {
            num: 7,
            source: "Toyin Falola, Nigerian historian and public intellectual, memoir about his childhood in the 1950s and 1960s, published in 2004",
            text: "The trains on which I sometimes took joy rides after skipping school were part of the changes that the British had introduced to Nigeria before I was born. By the 1930s, the new railway system had connected Ibadan, my home city, to the rest of the country.\n\nIbadan was in the heartland of the cocoa-growing belt. Millions of cocoa bags were brought to the city, to be carried by train to the port in Lagos for onward transmission to Europe. Ibadan was also in the region producing palm oil and peanuts, which ended up in far-flung places such as New York and London....\n\nThe trains brought new settlers to Ibadan. They created new neighborhoods defined by ethnicity, race, and education. The old city, whose native residents called each other 'Mesiogo,' had remained intact, but the new immigrants had established their own new city, which had become fully developed, well populated, and vibrant. The Mesiogo would travel from the old to the new city to shop, buying goods from the Lebanese, Syrians, and Indians as well as from the Igbo, Edo, Urhobo, and Ibibio immigrants from other parts of Nigeria who had flocked to the city. The new areas were the first to acquire the modern amenities of electricity and pipe-borne water."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period circa 1200 to 1450, Buddhism, Hinduism, and Confucianism included ideas about social structures, gender roles, and political authority that influenced societies across Asia.\n\nDevelop an argument that evaluates the extent to which one or more of these belief systems shaped societies and/or political systems in Asia during this period." },
          { id: 3, prompt: "In the period circa 1450 to 1750, economic, political, and religious rivalries led many imperial states around the world to expand their territories and influence.\n\nDevelop an argument that evaluates the extent to which economic rivalries were the primary motivation for the expansion of European empires during this period." },
          { id: 4, prompt: "During the twentieth century, medical and scientific discoveries affected life expectancies, access to resources, and social and economic structures, which reshaped individual lives as well as entire societies.\n\nDevelop an argument that evaluates the extent to which medical and scientific discoveries benefited individuals and/or societies during this period." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 2: Official 2025 Set 2
  // ========================================================================
  {
    id: "official-2025-s2",
    label: "2025 Set 2 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2025 Set 2 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2025,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Tom Standage, British journalist, A History of the World in 6 Glasses, book published in 2006",
            description: "",
            text: "Industrialization reduced [tea production] costs dramatically. In 1872 the production cost of a pound of tea was roughly the same in India and China. [But] by 1913 the cost of production in India had fallen by three-quarters.... In the space of a few years China had been dethroned [by India] as Britain's main supplier of tea.\n\nThe figures tell the story: Britain imported thirty-one thousand tons of tea from China in 1859, but by 1899 that total had fallen to seven thousand tons, while imports from India had risen to nearly one hundred thousand tons. The rise of India's tea industry had a devastating impact on China's tea farmers and further contributed to the instability of the country, which descended into a chaotic period of rebellions, revolutions, and wars."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify one argument the author makes regarding tea production in the late nineteenth and early twentieth centuries." },
          { letter: "B", prompt: "Describe one likely reason for the change in tea imports to Britain, as outlined by the author." },
          { letter: "C", prompt: "Explain how one additional piece of evidence, not included in the passage, would support the author's claim that China \"descended into a chaotic period\" in the nineteenth and early twentieth centuries." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies an argument such as industrialization dramatically reduced tea production costs in India, India replaced China as Britain's main tea supplier, or the shift devastated China's tea farmers." },
          { row: "B", category: "Part B", points: 1, description: "Describes a reason such as lower production costs in India due to industrialization, British investment in Indian tea plantations, or British colonial control facilitating production efficiency." },
          { row: "C", category: "Part C", points: 1, description: "Explains additional evidence such as the Taiping Rebellion, the Boxer Rebellion, the fall of the Qing dynasty in 1912, or the Opium Wars destabilizing China." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "George Padmore, Afro-Caribbean intellectual, essay published while he lived in London, 1956",
            description: "Footnote 1: Padmore spent much of the 1920s and 1930s as a supporter of communism but became disillusioned with Soviet leader Joseph Stalin. Footnote 2: The Marshall Plan was an initiative by the United States to provide aid to Western Europe after the end of the Second World War.",
            text: "White folk who want to help Africa must be prepared to work with Africans on the basis of complete racial equality. If the United States...is really worried about Communism taking root in Africa and wants to prevent such a disaster from taking place, [as a former communist] I can offer an assurance against it. This assurance will not only prevent Communism, but endear the people of the great United States forever to the Africans.\n\nInstead of supporting the discredited system of colonialism by propping up the European regimes with military and financial aid, let American statesmen make a bold gesture to the African in the spirit of the anti-colonialist tradition of 1776. This gesture should take the form of an aid package for Africa similar to the Marshall Plan."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify one reason United States officials were concerned about communism as noted in the first paragraph of the passage." },
          { letter: "B", prompt: "Describe the historical situation that resulted in the \"system of colonialism\" referred to by the author in the second paragraph of the passage." },
          { letter: "C", prompt: "Explain one way the source reflects the political situation in Africa during the second half of the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a reason such as Cold War competition with the Soviet Union, fear of communist expansion in the developing world, or the domino theory." },
          { row: "B", category: "Part B", points: 1, description: "Describes the historical situation such as European imperialism and the Scramble for Africa in the late 19th century, the Berlin Conference, or the establishment of colonial administrations across Africa." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as African decolonization movements seeking independence, Cold War rivalries influencing African politics, or newly independent nations navigating between Western and Soviet influence." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify one development that contributed to the spread of gunpowder technologies in the period before circa 1500." },
          { letter: "B", prompt: "Explain one way the use of military technologies affected the development of land-based empires in the period circa 1450 to 1750." },
          { letter: "C", prompt: "Explain one way navigational technologies contributed to economic change in the period circa 1450 to 1750." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as the Mongol conquests spreading gunpowder from China, trade along the Silk Roads, or knowledge transfer between civilizations." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as gunpowder empires (Ottoman, Safavid, Mughal) using cannons to conquer fortified cities, centralization of power, or military superiority enabling territorial expansion." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as the compass and astrolabe enabling European oceanic exploration, the caravel facilitating long-distance trade, or navigational advances opening new trade routes to Asia and the Americas." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify one technological development in communication or transportation in the twentieth century." },
          { letter: "B", prompt: "Explain one way nuclear technologies affected international relations in the second half of the twentieth century." },
          { letter: "C", prompt: "Explain one way the spread of new technologies contributed to increased economic activity in the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as the airplane, automobile, radio, television, internet, or satellite communications." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the nuclear arms race between the US and USSR, the policy of mutually assured destruction (MAD), or nuclear nonproliferation treaties." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as containerized shipping expanding global trade, the Green Revolution increasing agricultural output, or the internet enabling e-commerce and globalization." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which the spread of industrialization provided women with new opportunities and/or challenges during the period circa 1850 to 1950.",
        documents: [
          {
            num: 1,
            source: "Vera Karelina, Russian woman labor activist and revolutionary, describing her work as a political organizer among factory workers in St. Petersburg in the 1890s, memoir published in the Soviet Union in 1926",
            text: "I began the mass organization of women in the Factory Workers' Society. Each branch of the Society elected its own chairwoman and secretary. The chairwoman of one of the branches was Maria Soldatova, who worked at a cigarette factory.\n\nMaria was forty years old and illiterate. But she possessed inexhaustible energy and natural organizational ability and could understand and think quickly. Despite her illiteracy, Maria was unanimously elected chairwoman of her branch. She often complained about her illiteracy, and would always say, 'If only I could read and write, I could do so much more for the factory and the Society.' When someone offered to teach her to read and write, she began to study diligently."
          },
          {
            num: 2,
            source: "Ottoman postcard showing women and girls supervised by a male manager (the standing figure in the background) at a silk factory in the Ottoman city of Bursa, 1902",
            figureId: "2025s2-dbq-doc2-ottoman-silk-factory",
            text: "The photograph shows women and girls working at a silk factory in the Ottoman city of Bursa, supervised by a male manager standing in the background."
          },
          {
            num: 3,
            source: "He-Yin Zhen, Chinese woman political activist, \"What Women Should Know About Communism,\" essay published in a Chinese language journal in 1907, while she was living as a political exile in Japan",
            text: "Everywhere in Shanghai there are silk factories, cotton mills, weaving factories, and laundries, employing thousands of women. These women work all day into the evening.\n\nWomen suffer just to get hold of our meager bowl of rice. My fellow women: why don't you have any money to buy food? It is because the rich have stolen our property. They have forced the majority of the people into poverty and starvation. Look at the wives and daughters of the elite. They live luxuriously with plenty of food.\n\nSociety has accepted this state of affairs because, people say, as long as a woman has a job she would not fear starvation.... So the families that are very poor are sending their daughters and daughters-in-law to work in factories. But factories are built by investors to make a profit and, if you work in a factory, you remain at the mercy of its capitalist owners."
          },
          {
            num: 4,
            source: "Report by the provincial governorate of the Vladimir District of the Russian Empire on the occupations of the rural population of the district, published as part of a comprehensive government survey of the occupational patterns of the Russian population, 1912",
            text: "According to a local census taken in 1897, 52.2% of the male population of the Vladimir District were involved in some type of manufacturing occupation rather than in farming. The fact that such a significant portion of men in the villages are working in non-farming jobs means that often it is the women in these households that must do the majority of farm field work, which has traditionally been a male task.\n\nIn these circumstances, in many areas of the district, women take the leading roles in the households. Not only do women plow, plant, rake, and gather the hay and grain, but they often execute the social obligations of men. Many women now serve as village council leaders or members, and even as village tax collectors, positions that were all previously reserved for men."
          },
          {
            num: 5,
            source: "Toshio Takai, Japanese woman labor activist, memoir describing events in the 1910s and 1920s, first published in 1980",
            text: "I was around twelve years old in 1913 when a recruiter for female textile workers came to our village. He stopped by our house and said, 'How about it? Wouldn't you like to send your daughter to work for the Ogaki Company? We have dormitories, the work is easy and pleasant. There's silk spinning and you get paid thirteen sen [0.13 yen] per day. We feed you and clothe you, so it's really a help to your parents.' Once I heard all this, I made up my mind. I reckoned that with that kind of money I could buy my mother and sister something, so I said, 'I will do it. I'll work.'\n\nWhat we had heard was paradise; the reality turned out to be hell. The thirteen sen we were supposed to earn per day was before deductions were made for the food we ate and the soap, toilet paper, and straw sandals we used, so in the end we were left with less than one sen per day.\n\nMy job was to clean up waste pieces of silk thread from the factory floor. For twelve hours a day I was standing or walking among the machines. My legs became stiff and my feet were always swollen."
          },
          {
            num: 6,
            source: "Johanna Cornelius, White South African labor activist, autobiographical statement prepared for press release when she was elected as a National Organizing Officer for a major labor union of South African garment industry workers, circa 1940",
            text: "I was born and raised on a farm, but my parents struggled to earn enough to support their family. So, by the time I turned 18 [in 1930], I had to abandon ideas of further studies and instead travelled to Johannesburg, to earn my own living in the clothing factories. How proud I was on receiving my first week's wages! I wrote home, telling my father that he now had one mouth less to feed. I thought I would be able to save a sufficiently large sum to enable me to continue my studies. But to my sorrow and disappointment, after only a few months, the depression began to be felt in the clothing industry. Like many other workers, I was laid off. What could I do now? I had no money to take me home and could expect no financial help from my parents. So I stayed in the city, working a few hours here and there as I could, eating less food, and living on practically nothing....\n\nNonetheless, I could not then, and cannot now agree with the arguments of those that say that rural life is the basis of family life. I and thousands of my fellow working women in the factories are moved by everyday financial problems and cannot become sentimental about the beauties of the countryside. I am not afraid of the towns nor of the march of progress. I refuse to remain a servant in the kitchen."
          },
          {
            num: 7,
            source: "Ellen Kuzwayo, Black South African educator and women's rights activist, describing the history of Johannesburg, from her autobiography published in 1985",
            text: "After the discovery of gold in 1886, Black men from different communities streamed into Johannesburg which, at that time, was more or less a temporary mining camp. Men flowed to the mines from the rural areas leaving their families behind to be cared for by the senior woman in every home. Still, in those early decades most Black women lived on land which their communities owned and which they cultivated.\n\nBut things changed for the worse in the [early decades of the twentieth century], when communal land was removed from the control of Black people and communities were forced to move from one area to another. So Black women were suddenly plunged into a situation of accepting numerous roles of responsibility. Without warning or training, they became not only mothers, but also family administrators, community counselors, and overall overseers of both home and neighborhood.\n\nFor many women, the burden proved too much. Their response came in the form of moving to cities themselves, often in search of their husbands or sons and despite stringent 'influx' regulations. As they were usually not allowed to live with their husbands in company dormitories, they found a solution in domestic work, where they were provided with a room, usually somewhere at the back of their White employers' houses.\n\nFootnote 1: In the early twentieth century, the government of South Africa imposed limits on the total amount of agricultural land in the country that could be owned by Black farmers, effectively forcing most Black South Africans who lived in rural areas to become tenant farmers on lands owned by Whites.\nFootnote 2: Government-imposed restrictions that were designed to prevent the permanent settlement of Black families into \"Whites-only\" urban areas of the country."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period circa 1450 to 1750, new connections between world regions led to the movement or transfer of people, animals, plants, and pathogens.\n\nDevelop an argument that evaluates the extent to which such movements or transfers led to demographic, cultural, or social changes across the Atlantic region during this period." },
          { id: 3, prompt: "During the eighteenth century, Enlightenment philosophers developed new ideas about individual rights and the role of governments.\n\nDevelop an argument that evaluates the extent to which Enlightenment ideas encouraged movements for political change and/or social reform during the period circa 1750 to 1900." },
          { id: 4, prompt: "During the twentieth century, competing political and economic interests along with intense nationalism contributed to global conflicts.\n\nDevelop an argument that evaluates the extent to which nationalism was the most important factor contributing to global conflict during this period." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 3: Official 2024 Set 1
  // ========================================================================
  {
    id: "official-2024-s1",
    label: "2024 Set 1 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2024 Set 1 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2024,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Howard Spodek and Michele Langford Louro, United States historians, article published in a scholarly journal, 2007",
            description: "",
            text: "Under the Mughals, Hindus and Muslims interacted in economics, politics, social life, the arts, and culture. Through migration and conversion, the Muslim population of India grew from about 400,000 in 1200, . . . to 12.8 million in 1535, to perhaps 50 million by 1800. Muslim scholars and Sufi religious mystics and saints migrated to India from Iran, Turkey, and Central Asia. Some came in search of government jobs, others for new cultural opportunities, to study, or to spread their own beliefs. Some of the best poets immigrated from Persia.\n\nSimilarly, imperial court painters, who produced masterpieces in the Persian and Mughal miniature styles, interacted with painters of the Rajput schools in local Hindu courts across north India, resulting in artistic innovations in both. On the level of mystical belief and experience, an astonishing syncretism emerged between Hindus and Muslims, especially in the poetry of Kabir [died circa 1520] and of Guru Nanak (1469\u20131538), the originator of the Sikh religion. Mystics in the two communities, Hindu bhakti (devotional) worshippers and Muslim Sufis, frequently had warm personal relations and often attracted followers from each others' communities."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE claim that the authors make in the first paragraph." },
          { letter: "B", prompt: "Identify ONE piece of evidence that the authors use to support their claims about cultural interactions between Hindus and Muslims as described in the second paragraph." },
          { letter: "C", prompt: "Explain ONE reason why Mughal rulers in the period circa 1450\u20131750 would have encouraged the interactions described in the passage." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a claim such as Hindus and Muslims interacted in many aspects of life under the Mughals, or the Muslim population grew through migration and conversion." },
          { row: "B", category: "Part B", points: 1, description: "Identifies evidence such as the interaction between Persian/Mughal and Rajput painters, the syncretism in the poetry of Kabir or Guru Nanak, or warm relations between Hindu bhakti worshippers and Muslim Sufis." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as maintaining stability in a religiously diverse empire, Akbar's policy of religious tolerance (sulh-i-kul), or encouraging loyalty among Hindu subjects." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Election Poster for the German National Socialist Party, 1932",
            description: "The German text in the poster reads, \"Men! Women! Millions of men without work; millions of children without futures. Save the German family\u2014vote for Adolf Hitler.\"",
            figureId: "2024s1-saq2-nazi-poster",
            text: ""
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE likely political purpose of the image." },
          { letter: "B", prompt: "Explain ONE way the image illustrates the economic situation of the period after the First World War." },
          { letter: "C", prompt: "Explain ONE way the rise of the German National Socialist Party led to the Second World War." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a purpose such as gaining votes for the Nazi party by appealing to economic fears, exploiting the suffering of German families, or portraying Hitler as a savior." },
          { row: "B", category: "Part B", points: 1, description: "Explains the economic situation such as the Great Depression causing mass unemployment, hyperinflation and economic instability in Weimar Germany, or the impact of war reparations." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as Nazi expansionist policies (Lebensraum), remilitarization of the Rhineland, annexation of Austria and Czechoslovakia, or the invasion of Poland." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE method Europeans used to expand their empires in the Americas in the period circa 1450\u20131750." },
          { letter: "B", prompt: "Explain ONE way European colonialism affected Indigenous peoples in the Americas in the period circa 1450\u20131750." },
          { letter: "C", prompt: "Explain ONE way European interactions with non-European peoples in the Americas contributed to the development of a global economy in the period circa 1450\u20131750." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a method such as military conquest, establishing settler colonies, missionary activity, or creating forced labor systems like the encomienda." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as devastating population decline from disease, destruction of indigenous political systems, or forced labor in mines and plantations." },
          { row: "C", category: "Part C", points: 1, description: "Explains a contribution such as the Columbian Exchange, the flow of silver from the Americas to Europe and Asia, or the development of the Atlantic trading system." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE way Asians resisted Western imperialism in the period circa 1800\u20131914." },
          { letter: "B", prompt: "Explain ONE way European imperialism changed the cultures of peoples in Asia in the period circa 1800\u20131914." },
          { letter: "C", prompt: "Explain ONE way European imperialism in Asia contributed to changes in the global economy in the period circa 1800\u20131914." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a form of resistance such as the Sepoy Rebellion in India, the Boxer Rebellion in China, or nationalist movements in Southeast Asia." },
          { row: "B", category: "Part B", points: 1, description: "Explains a cultural change such as the spread of Western education, Christian missionary activity, or the adoption of Western political ideas." },
          { row: "C", category: "Part C", points: 1, description: "Explains an economic change such as the integration of Asian economies into global markets, the export of raw materials to European factories, or the opium trade disrupting China's economy." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which communist rule transformed Soviet and/or Chinese societies in the period circa 1930\u20131990.",
        documents: [
          {
            num: 1,
            source: "S. M. Prokhorov, Soviet artist, Students from a Workers' School, poster for public display, 1928",
            figureId: "2024s1-dbq-doc1-soviet-poster",
            text: "Workers' schools were Soviet adult-learning institutions that offered evening classes to factory workers to prepare them to enroll in state-run universities."
          },
          {
            num: 2,
            source: "Ya. I. Drobinskiy, member of the Soviet Communist Party, memoirs of his political detention and trial in the 1930s, recorded by a Soviet journalist during the de-Stalinization campaign of the late 1950s but never published",
            text: "One of the inmates in our large holding cell was an elderly peasant from a collective farm (kolkhoz). We gathered that his son was being held in another holding cell and they were trying to make the son testify against his father. The old man kept saving crumbs from his daily bread ration to give to his son when they saw each other. The son must have eventually succumbed to the beatings and signed a document saying that the father was trying to convince him to kill the kolkhoz director. The old man denied the accusation, and no matter how hard they tried, they couldn't convince him to admit his 'guilt.' He was summoned to a joint interrogation with the son and went in determined to defend himself and tell the truth. But when he saw his tortured son, with the bruises from the beatings clearly visible, something inside him broke and he told the investigator: 'It's true, all of it, I confess, whatever my Ilyushka told you, don't doubt it, everything is true,' and he immediately signed the confession they had prepared for him.\n\nA few days later, when he next saw his son on the way to the court chambers, the old man somehow managed to get away momentarily from his guards and gave his Ilyushka the fistful of crumbs he had collected for him. And then the son broke down, fell on his knees, and started crying, 'Forgive me, papa, forgive me, I betrayed you, forgive me.' The old man started mumbling something, patted his son on the head, told him it was OK. The guards didn't know what to do; their emotions overwhelmed them. Even the judges of the tribunal, who had seen it all, were shaken to their core."
          },
          {
            num: 3,
            source: "Alexandra Kollontai, Russian Marxist and politician, essay titled \"The Soviet Woman\u2014a Full and Equal Citizen of Her Country,\" published in 1946",
            text: "In opening up to women access to every sphere of creative activity, our state has simultaneously ensured all the conditions necessary for her to fulfill her natural obligation\u2014that of being a mother bringing up her children and being a homemaker.\n\nFrom the very beginning, Soviet law recognized that motherhood is not a private matter, but the social duty of the equal woman citizen. This fact is set in the Constitution. The Soviet Union has solved one of the most important and complex of problems: how to make active use of female labor in any area without this harming motherhood.\n\nThe Soviet state provides increasing assistance to mothers. Women receive state financial benefits and maternity leave with pay before and after the birth of the child, and their job is kept open for them until they return from leave. Large and one-parent families receive state financial benefits to help them provide for and bring up their children. In 1945 the state paid out more than two billion rubles [Soviet currency] in such benefits."
          },
          {
            num: 4,
            source: "Article describing a \"contention meeting,\" published in Shenyang Daily, a regional Chinese newspaper, 1957. Footnote: \"Contention meetings\" were Communist Party\u2013organized mass gatherings during a brief period in 1956\u20131957 in which Chinese citizens were encouraged to openly express their criticisms of the Communist Party and its leaders.",
            text: "Chang Po-sheng, head of the propaganda department of the Communist Youth League at Shenyang University, and Huan Chen-lu, editor of the university newspaper, gave a joint speech at the meeting. The central problem they brought up was 'how to abolish the absolute leadership of the Party.'\n\nHuang Chen-lu said: 'Before the Communist revolution, the Party enjoyed high prestige, because its connection to the people was close and strong. But since the founding of the People's Republic [1949], the Party has made itself superior to the people. More and more persons with impure motives are joining the Party because it has become the easiest way to acquire power, influence, and money.'\n\nChang Po-sheng added: 'Outwardly, we have democratic elections, but actually the Party exercises dictatorship and the few top leaders in the Party's Political Bureau exercise absolute power. As for freedom of assembly, association, and publication, these are just things written in the Constitution, and the Party has shown that the Constitution is just a scrap of paper that it does not need to observe. Citizens only have the right to become the Party's obedient subjects. The Party has become the emperor of China\u2014a sacred body that all must obey.'"
          },
          {
            num: 5,
            source: "General Office of the Central Committee of the Chinese Communist Party, summary report regarding food shortages, Beijing, China, 1958",
            text: "Anhui Province: A total of 1.3 million people are without food supplies. Famine has forced more than 3,000 people to leave their homes.\n\nHebei Province: Over 474,000 families took part in a number of food riots recently. In many villages, people have almost no food left. It is quite common for entire families to become beggars.\n\nShandong Province: Over 670,000 people have had their food surplus completely cut off, and over 150,000 people have been forced to flee and become beggars.\n\nYunnan Province: In a small number of poorer collectives, there have been quite a few food-related riots. The causes of these food-related riots are various. First of all, local communist officials failed to discover the real food situation in crisis areas. Some officials were afraid of making mistakes or being accused of disloyalty to the Party; they therefore refused to believe complaints about shortages. Second, the provision plans for some areas have fallen short, and after riots occurred, the local officials failed to pay close attention to grain markets."
          },
          {
            num: 6,
            source: "Xia Ping, Chinese woman member of the Communist Party, \"Make Energetic Efforts to Train Women Cadres,\" article published in the political magazine Hongqi (Red Banner), 1973",
            text: "Some of our men comrades are still not able to deal with women correctly. They claim that women's 'family complications'\u2014by which they mean our domestic roles\u2014make it very difficult to promote women at work.\n\nFor thousands of years the basic guiding thought of the feudal landlords in China and their capitalist servants was to treat women as slaves, to put them in the kitchen, to burden them with heavy household chores, and to deprive them of the rights to participate in social life and political activities. When the socialist revolution took place, one of the most important priorities of the working class was to liberate women from this domestic slavery. It is undeniable that the establishment of the socialist system has in fact been liberating to Chinese women, the great majority of whom now participate in the productive labor of our nation. However, due to the persistence of old ideas and anti-women prejudice, the problem of household duties and chores has not been completely solved. To solve this problem, it is necessary to promote the practice that men and women must share household chores.\n\nWe also need to pay attention to some specific practices that hold women down. We should oppose early marriage and promote late marriage. It is essential that we continue to do a good job in providing social welfare facilities, such as health clinics, nurseries, and kindergartens."
          },
          {
            num: 7,
            source: "Richard Kosolapov, Soviet journalist, former editor in chief of the Communist Party's journal Komunist, article in Pravda, the largest Soviet newspaper, 1983",
            text: "In our society today, there have been some discussions about moving toward greater acceptance of 'private ownership' and 'private enterprise.' These discussions are clearly unfounded, and they can be dangerous. We have all seen how easy it is for uncommunist-like behaviors and ideas to spring up spontaneously among us when we let our collectivist spirit grow weak or when the Party doesn't work hard on fostering a healthy social and educational climate. All sorts of bribe takers, thieves, grifters, and parasites stand ready to steal the fruits of others' labor. Their 'entrepreneurship' is nothing but a desire to pocket the loose kopek (penny) of the honest Soviet citizens. Such people are especially dangerous because they, like moths, eat holes in the fabric of socialist economic and social relations and try to draw others into their selfishly individualistic, anti-collectivist worldview.\n\nThese advocates of more private ownership, materialism, and consumerism are enemies of the socialist state, and the struggle against them must be uncompromising. Maintaining full central control over both production and consumption is of utmost importance for strengthening the organic wholeness of our system. Socialist society is a working society, not a consumer society."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period circa 1200\u20131750, networks of exchange led to the spread of religions, cultures, ideas, and traditions in many parts of Afro-Eurasia.\n\nDevelop an argument that evaluates the extent to which exchange networks contributed to social or cultural change in Afro-Eurasia during this period." },
          { id: 3, prompt: "In the period circa 1750\u20131900, societies across the globe were affected by new technologies that transformed methods of production.\n\nDevelop an argument that evaluates the extent to which the growth of industrialization led to economic or social change during this period." },
          { id: 4, prompt: "In the twentieth century, technological advances in communication, transportation, medicine, agriculture, and other fields shaped human development and interactions with both intended and unintended consequences.\n\nDevelop an argument that evaluates the extent to which new technologies improved the lives of individuals during this period." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 4: Official 2024 Set 2
  // ========================================================================
  {
    id: "official-2024-s2",
    label: "2024 Set 2 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2024 Set 2 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2024,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Chase F. Robinson, historian, Islamic Historiography, book written in 2003",
            description: "",
            text: "[A]lready well before the twelfth and thirteenth centuries, an enormous amount of [history] had been written, and Muslims were well on their way to generating a tradition that outstripped in size and quality anything written by . . . Jews or Christians. The impulse [for so much history writing] was two-fold. [First], the spectacular success of empire building during the seventh and eighth centuries created a market of readers hungry for historical narrative, . . . which offered lessons and models to rulers, their courts, and urban elites. . . . Second, . . . many were enthusiastic about those forms [of history writing] that reinforced traditional religious institutions . . . and attitudes. In practice, this meant that they wrote a great many [biographies] of religious figures and of the Prophet [Muhammad]. . . .\n\nMuslim states had a stake in learning in general and [history writing] in particular. Nearly all states [sponsored history writing and art creation] that legitimized their exercise of power, and large-scale learning depended on urban networks of knowledge\u2014reading, teaching, writing\u2014that states cultivated and defended. It is this\u2014the mutual attraction of historians and ambitious states\u2014that explains the [development of Islamic history writing]."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE argument that the author makes in the first paragraph." },
          { letter: "B", prompt: "Identify ONE piece of evidence that the author uses to support an argument in the passage." },
          { letter: "C", prompt: "Explain how ONE development in the period 1200\u20131750 could be used to support the author's argument in the second paragraph about history writing and art creation legitimizing states' exercise of power." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies an argument such as Muslims produced more historical writing than Jews or Christians, or that empire building and religious devotion drove the production of historical writing." },
          { row: "B", category: "Part B", points: 1, description: "Identifies evidence such as biographies of the Prophet Muhammad, the role of courts and urban elites as an audience, or state sponsorship of learning." },
          { row: "C", category: "Part C", points: 1, description: "Explains a development such as Ottoman, Safavid, or Mughal patronage of art and historical writing to legitimize their rule, or the construction of libraries and centers of learning." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Graduation Ceremony at a Christian Theological Seminary in Northern India, 1897",
            description: "The image shows two British missionaries (second row, center) surrounded by Indian graduates. The seminary (religious school) was founded in 1871 to educate and train Indian missionaries.",
            figureId: "2024s2-saq2-india-seminary",
            text: ""
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE development during the period 1450 to 1750 that contributed to the activities shown in the image." },
          { letter: "B", prompt: "Explain ONE reason why imperialist governments often supported activities of the type shown in the image during the nineteenth and early twentieth centuries." },
          { letter: "C", prompt: "Explain ONE way indigenous peoples in Africa and/or Asia resisted the spread of the cultural practices reflected in the image during the nineteenth and early twentieth centuries." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as European exploration and colonization, the Protestant Reformation spurring missionary activity, or the establishment of trading companies in Asia." },
          { row: "B", category: "Part B", points: 1, description: "Explains a reason such as using Christianity to justify imperial control, creating a class of educated local allies, or the civilizing mission ideology." },
          { row: "C", category: "Part C", points: 1, description: "Explains a form of resistance such as religious revitalization movements, armed resistance, or nationalist movements that rejected Western cultural impositions." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE development in the period circa 1200\u20131300 that facilitated the establishment of the Mongol Empire." },
          { letter: "B", prompt: "Identify ONE development in the period circa 1200\u20131300 that enabled the Mongol Empire to facilitate Afro-Eurasian trade and/or communications." },
          { letter: "C", prompt: "Explain ONE reason why the Mongol khanates often facilitated the spread of cultural or religious practices." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as Genghis Khan's military innovations, the unification of nomadic tribes, or superior cavalry tactics and siege warfare." },
          { row: "B", category: "Part B", points: 1, description: "Identifies a development such as the Pax Mongolica ensuring safe trade routes, the yam postal relay system, or diplomatic connections across Eurasia." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as Mongol religious tolerance, the desire to integrate diverse populations, or the economic benefits of cultural exchange." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE political factor in the period after 1945 that facilitated the establishment of independent postcolonial states in Africa." },
          { letter: "B", prompt: "Identify ONE economic factor in the period after 1945 that facilitated the establishment of independent postcolonial states in Africa." },
          { letter: "C", prompt: "Explain ONE reason why postcolonial states in Africa often adopted communist or socialist ideologies." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a political factor such as weakened European powers after WWII, the rise of nationalist movements, or Cold War competition encouraging decolonization." },
          { row: "B", category: "Part B", points: 1, description: "Identifies an economic factor such as the economic drain of maintaining colonies, African demands for economic self-determination, or the costs of post-war reconstruction diverting European resources." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as socialist ideologies offering an alternative to capitalist colonialism, Soviet support for liberation movements, or the appeal of state-led development to address poverty." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which economic motives were the leading cause of Japanese imperialism in the period circa 1900\u20131945.",
        documents: [
          {
            num: 1,
            source: "\"Why do Japan's businessmen insist on war against Russia?,\" editorial published in the Tokyo Keizai zasshi (Tokyo Economist), Japan's leading business journal, 1903",
            text: "Today, we join the countless private Japanese entrepreneurs and industrialists who are advocating for a war against Russia over the Manchurian problem. In recent days, we have heard reports that Russia has introduced new regulations increasing the tax it levies on non-Russian ships docking at the harbor in Port Arthur, so that Japanese ships would have to pay more than 12 times the amount of port tax that Russian ships do. If Russia occupies other parts of Manchuria [a region of East Asia to the north of Korea and to the northeast of China] and extends this method of levying taxes there, Japanese businesses may have to endure terrible hardships, possibly cutting us out of the Manchurian trade altogether.\n\nIn short, as long as Russia retains a foothold in Manchuria, we must recognize on the basis of her past record that she will do all in her power to hold Japan's trade down. It is better to take the initiative and force a solution than to wait until circumstances have further forced our hand.\n\nFootnote: A major commercial hub and point of entry of foreign goods into Manchuria, Port Arthur had been leased by the Qing Empire to Russia since 1898."
          },
          {
            num: 2,
            source: "Fumimaro Konoe, diplomat and advisor to the prime minister of Japan, \"Reject the Anglo-American-Centered Peace,\" essay published in the political magazine Japan and the Japanese, Tokyo, 1918",
            text: "As the history of England and France shows, they long ago occupied the less civilized regions of the world, made them into colonies, and had no problem monopolizing them for their own profit. Therefore, not only Germany but all late-developing countries were in the position of having no land to acquire.\n\nEngland has lost no time in trumpeting its self-sufficiency, and now it, together with America, is advocating that other countries be denied access to colonies. Such are the contradictions between what England and America say and what they do. If the principle that no country should establish new colonies is carried out at the coming peace conference, it would be a great economic blow to Japan. Germany's need to overthrow this order was quite justified, though the means it chose were unfortunate because they were based on militarism. Nevertheless, as a Japanese I cannot help feeling deep sympathy for what Germany had to do.\n\nJapan is limited in territory, poor in natural resources, and has a meager domestic market for manufactured products. If England closed off its colonies, how would we be able to assure our nation's secure survival? In such a case, the need to ensure its survival would compel Japan to attempt to overthrow the status quo as Germany did before the war.\n\nFootnote: Konoe was a member of Japan's delegation to the 1919\u20131920 Paris Peace Conference."
          },
          {
            num: 3,
            source: "Manifesto Against the Japanese Invasion of Manchuria, published by The Allied Korean Organizations in New York, a community organization of Korean Americans, 1931",
            text: "Japan gained her foothold in the continent when she annexed Korea in 1910 regardless of her repeated solemn vows to recognize the sovereignty and independence of the Korean Kingdom. Japan violated so many treaties and agreements that it is absurd to believe that there is any sincerity in Japan's motive to abide with or to live up to any kind of international treaties or agreements in which she has been or will be one of the participants. After the annexation of Korea under the pretext of Asia for Asians, Japan has been steadily looking for a chance to make Manchuria a second victim of her shameless imperialistic conquest. One major railroad in Manchuria was already built with Japanese capital, and another one is almost halfway completed. It is only a matter of time before the most fertile region of Manchuria would be entirely under the Japanese domination."
          },
          {
            num: 4,
            source: "Kanji Ishiwara, Japanese army officer stationed in Manchuria, \"Personal Opinion on the Manchuria-Mongolia Problem,\" essay written in 1931, shortly before he masterminded the diplomatic crisis that led to the Japanese occupation of Manchuria",
            text: "For a nation-state to play an active role in the world, its most essential requirement is a favorable national defense position. As American economic power advances, the United States will become the champion of the Western peoples. Our country must resist the encroachments of Russia to the north as it simultaneously confronts British and American power to the south. Northern Manchuria is of strategic value to Japan. If our country brings northern Manchuria under its influence, Russia will find it extremely difficult to advance to the east. It will not be difficult to block Russia simply by building up our strength in Manchuria and Mongolia. If our country is relieved of its burden to the north, it can then make bold plans for China and the South Sea region.\n\nThe Manchuria-Mongolia region is of enormous strategic importance with respect to the destiny and development of our country. If the Manchuria-Mongolia region is brought under our influence, then our control over Korea will be stabilized. If our country shows firm determination in resolving the Manchuria-Mongolia problem through force, it can assume a position of leadership toward China; it can promote China's unity and stability; and it can guarantee peace in the East."
          },
          {
            num: 5,
            source: "Eliot Janeway, United States journalist, article published in the New York Times, 1937",
            text: "Japan's new offensive in the Beijing region is her answer to the question upon which the future of Asia apparently hinges: Who is to use the abundant raw materials of China? Both China and Japan greatly desire these materials. If Japan prevails in this, it will mean far more than the shrinking of China's boundaries. The industrialization of China will be fatally hampered by the loss of this principal source of raw materials. Japan requires the products of this area for its own uses, but even if she did not, she would have had to strike here in order to prevent China's industrialization and the unification which she fears would result from it.\n\nThe Shaanxi province has the very commodities that Japan needs most desperately. If Japan's steel industry is to become self-sufficient, it will need the 300,000,000 tons of ore which lie in Shaanxi. Likewise, Japan is facing coal shortages. The coal her iron and steel industries use must be imported, and again Shaanxi is the nearest source.\n\nFootnote: A reference to the fighting during the Second Sino-Japanese War (1937\u20131945), in which Japan invaded China and fought against a coalition of Nationalist and Communist Chinese forces."
          },
          {
            num: 6,
            source: "Toichi Nawa, Japanese economist and professor at the Osaka University of Commerce, The Japanese Cotton Spinning Industry and the Question of the Supply of Raw Cotton, book published in Osaka, 1937",
            text: "Would it be possible, as many have suggested, for Japan to put North China under our control so that we have full access to her resources, including her rich cotton fields? The answer, in my view, is \"no.\" China is a backward society, based on a traditional pattern of landholding and lacking modern industries. It would require extraordinarily large expenditures to develop its economy, block interventions from third countries, and develop policies to mitigate Chinese resistance. It is highly doubtful that Japan has the necessary capital and resources to cope with such a monumental task.\n\nThe foreign trade statistics of the last few years show that the more we expand the productive capacity of our industries in preparation to extend Japanese rule to mainland China, the greater our dependence on the world market and the imports of raw materials becomes. The lure of empire building in Asia is therefore a grave danger for our country's economic advance."
          },
          {
            num: 7,
            source: "Japanese language class being taught by a Japanese instructor at a Singaporean school, circa 1943. Photograph published in Asahi Shimbun, one of Japan's major daily newspapers.",
            figureId: "2024s2-dbq-doc7-japanese-class",
            text: "The British colony of Singapore fell to the Japanese armies in 1942."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period circa 1200\u20131750, religious traditions were used to establish and legitimize rulers and governments throughout Afro-Eurasia.\n\nDevelop an argument that evaluates the extent to which religion was the main source of political legitimacy for rulers in Afro-Eurasia during this period." },
          { id: 3, prompt: "In the period circa 1750\u20131900, discontent with monarchist and imperial rule spread around many parts of the world and led to significant political changes.\n\nDevelop an argument that evaluates the extent to which discontent with monarchist or imperial rule was the main source of new political ideologies or systems of government during this period." },
          { id: 4, prompt: "In the late twentieth century, globalization was driven by a variety of factors, including new technologies and economic and political change.\n\nDevelop an argument that evaluates the extent to which globalization was primarily driven by economic factors during this period." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 5: Official 2023 Set 1
  // ========================================================================
  {
    id: "official-2023-s1",
    label: "2023 Set 1 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2023 Set 1 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2023,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Anthony Pagden, British historian, Peoples and Empires, 2003",
            description: "",
            text: "The fall of the modern European empires was as rapid as their rise had been, and in most places the reasons for their downfall were similar. Ultimately all [empires] had maintained their rule through [acceptance by conquered peoples] rather than by force or the threat of force. . . . What had applied to the Roman Empire also applied to the British and the French, the German, and, ultimately, even the Russian: subject peoples were only to remain in subjection so long as at least a significant number of them could see some benefit to them in so doing.\n\nResistance to any kind of rule requires organization and courage. In the case of resistance to colonial rule, however, it also requires some vision of a better future in some postcolonial world. It requires an ideology capable of mobilizing those who might otherwise be prepared to accept the status quo as merely inevitable. Ironically, this ideology was provided by the same refashioning of society that had been the driving force behind most modern imperialism, namely nationalism."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE claim that the author makes in the passage." },
          { letter: "B", prompt: "Explain how ONE development in the second half of the twentieth century could be used to support the author's claim about nationalism in the second paragraph." },
          { letter: "C", prompt: "Explain how ONE development from the nineteenth or twentieth century could be used to challenge a claim that the author makes in the first paragraph." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a claim such as empires maintained rule through acquiescence rather than force, nationalism was the ideology that fueled resistance to colonial rule, or empires fell rapidly." },
          { row: "B", category: "Part B", points: 1, description: "Explains a development such as African or Asian nationalist movements leading to independence, the role of leaders like Nkrumah or Ho Chi Minh, or the creation of new nation-states." },
          { row: "C", category: "Part C", points: 1, description: "Explains a challenge such as violent resistance to colonial rule (Sepoy Rebellion, Zulu Wars) showing that force, not just acquiescence, maintained empires." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Ibn Khaldun, Arab scholar and historian writing about the Mamluk dynasty of Egypt, late fourteenth century",
            description: "",
            text: "It was by the grace of God, glory be to Him, that He came to the rescue of Islam, by reviving its last breath and restoring in Egypt the unity of the Muslims [in the mid-thirteenth century]. He did this by sending the Mamluks to the Muslims as guardian rulers and devoted defenders, who were imported as slaves from the lands of the heathen Qipchaq Turks. The Turkish slaves embrace Islam with the determination of true believers, while retaining their nomadic virtues.\n\nThe slave merchants bring them to Egypt in batch after batch. Then the rulers lodge them in the royal chambers, and give them a careful upbringing, including the study of the Qur'an. Then they train them in the use of the bow and the sword, in riding horses, and in fighting with the lance until they become tough and seasoned soldiers. When the rulers are convinced that they are prepared to defend and die for them, they increase their pay, lands, and incomes. Then they appoint them to high offices of state, and even sultans are chosen from them who direct the affairs of the Muslims."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE claim that the author makes about the Mamluks in the first paragraph." },
          { letter: "B", prompt: "Identify ONE way the passage illustrates the political situation of the Islamic world in the period before circa 1450." },
          { letter: "C", prompt: "Explain ONE way the passage could be used to illustrate differences in forms of coerced labor in the period before circa 1750." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a claim such as God sent the Mamluks to rescue Islam, the Mamluks were imported as slaves from Turkic lands, or they embraced Islam with true devotion." },
          { row: "B", category: "Part B", points: 1, description: "Identifies a way such as the use of military slave systems in Islamic states, political fragmentation requiring strong military defense, or the threat of Mongol invasion." },
          { row: "C", category: "Part C", points: 1, description: "Explains a difference such as military slavery in Islamic states allowing social mobility and political power, contrasted with chattel slavery in the Americas where enslaved people had no such opportunities." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE reason for the increase in the movement of enslaved peoples across the Atlantic Ocean during the period circa 1450\u20131750." },
          { letter: "B", prompt: "Explain ONE way the increasing number of enslaved peoples resulted in social or cultural change in the Americas during the period circa 1450\u20131750." },
          { letter: "C", prompt: "Explain ONE way the increased demand for enslaved peoples affected African populations during the period circa 1450\u20131750." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a reason such as the development of plantation agriculture, the decline of Indigenous labor due to disease, or European demand for cash crops like sugar and tobacco." },
          { row: "B", category: "Part B", points: 1, description: "Explains a change such as the development of syncretic cultures, the creation of racial hierarchies and casta systems, or the emergence of distinct African-descended communities." },
          { row: "C", category: "Part C", points: 1, description: "Explains an effect such as population decline in West Africa, increased warfare and instability as states raided for captives, or the disruption of existing social structures." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE way that environmental conditions contributed to the beginning of industrialization in the eighteenth and early nineteenth centuries." },
          { letter: "B", prompt: "Explain ONE way societies or governments reacted to industrialization in the eighteenth and nineteenth centuries." },
          { letter: "C", prompt: "Explain ONE way human activity led to environmental changes in the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a way such as Britain's abundant coal and iron deposits, access to waterways for transportation, or favorable agricultural conditions freeing labor for factories." },
          { row: "B", category: "Part B", points: 1, description: "Explains a reaction such as labor reform legislation, the rise of labor unions, Luddite resistance, or government investment in infrastructure." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as deforestation, air and water pollution from industrial activity, climate change from fossil fuel use, or the Green Revolution's environmental impacts." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which foreign involvement led to the collapse of the Qing Empire.",
        documents: [
          {
            num: 1,
            source: "Petition from two local-level government officials in the district of Rong, Guangxi Province, southern China, to the provincial governor, circa 1850",
            text: "Our dynasty has always followed the teachings of the ancient sages and, as a result, everyone in our district lived in harmony for a long time. As the population increased, resources were plentiful. However, in 1846 local bandits and rebels began attacking our district. They captured the district capital and took government officials as prisoners. Many people were killed, houses were left in ashes, and farmers' fields were thick with weeds. The rebels forced the people to pay land taxes to them. They used official seals to issue false orders to the population. It was intolerable to see these criminals seize control of the local government.\n\nYour Excellency, last year you promised to send an army to suppress the rebels. We beg you, please have the army come immediately to exterminate the rebels and save the people. Our local militia has been fighting them for a long time and we fear that if the militia collapses, the rebels will run free and it will become impossible for the government to control them."
          },
          {
            num: 2,
            source: "Karl Marx, German political economist, \"Revolution in China and in Europe,\" article published in the New York Daily Tribune, 1853",
            text: "The current formidable revolution that is taking place in China has unquestionably been caused by the British cannon forcing upon China the unlimited importation of opium. Faced with the might of the British arms, the authority of the Manchu [Qing] dynasty fell to pieces and China's complete isolation from the civilized world came to an end.\n\nThe opium trade changed the balance of trade from being continually in favor of the Chinese to being an exhausting drain on the silver reserves of the empire. Hence, the emperor made strong decrees against the opium trade, which were subsequently not enforced. The bribery connected with opium smuggling has entirely corrupted the Chinese state officers in the southern provinces and thereby undermined the authority of the state.\n\nThe introduction of English mass-produced textiles has had a similar effect on the native Chinese industry to that on the Ottoman Empire, Persia, and India. In China the spinners and weavers have suffered greatly under this foreign competition, and their communities have become destabilized as a result.\n\nFootnote: a reference to the Taiping Rebellion"
          },
          {
            num: 3,
            source: "Qing China's Foreign Office, policy letter addressed to all Chinese embassies abroad, 1878",
            text: "Under the Treaties of Tianjin, foreigners in China are not subject to the jurisdiction of the Chinese imperial authorities. If they have disputes among themselves, their own consuls in China are to settle them; if they commit a crime in China, their own diplomats are to punish them according to their national laws. But in practice, foreigners claim much more than this: they interpret the treaties to mean that they may violate Chinese laws without consequences. To this we cannot agree\u2014China never gave foreigners permission to disregard our laws.\n\nA special case of this issue is the missionary question. By the terms of the treaties, China had to agree to admit Western missionaries and to guarantee them protection. But among the missionaries there are some who act as if their missions are outside of government control, and among their Chinese converts there are some who seem to believe being Christians allows them to break the laws of their own country. We cannot accept this. Chinese subjects, whether Christians or not, must obey completely the laws of China.\n\nFootnote: Signed in 1858, the treaties gave European countries and Japan legal and economic advantages in their relationship with Qing China."
          },
          {
            num: 4,
            source: "Village elders in the district of Caozhou, Shandong Province, northeastern China, report to the provincial government, 1896",
            text: "In our district, the wealthy landowners grow richer each year, while the poor have nothing. These rich folks treat the poor like strangers\u2014they will lend them neither cloth nor grain. They treat their hired laborers particularly cruelly, arousing a hatred so strong that the poor people are easily tempted to turn to a life of banditry.\n\nThe bandits come every few weeks to people's houses, bearing sharp knives or foreign rifles. When they ask the poor people for money at knifepoint, how can the poor refuse? If the grain of the district were more equally distributed, there would be enough to eat, but there are many without any land. All the poor can do is sell their labor or turn to a life of crime. In North China a hired farmworker can find work for three months per year at the most. A person cannot make a living on that. So, when they see the easy lives of the bandits, the people are tempted to join them."
          },
          {
            num: 5,
            source: "Chinese Alliance Association, a coalition of political organizations of young Chinese men studying in foreign countries, \"Revolutionary Proclamation,\" 1907",
            text: "Since the beginning of China as a nation, we Chinese have governed our own country despite occasional interruptions. Today, when we raise the righteous standard of revolt in order to expel an alien race [the Manchu] that has been occupying China, we do no more than our ancestors have done or expected us to do.\n\nThe purpose of past revolutions, such as those conducted by the Ming and Taiping, was to restore China to the Chinese, and nothing else. We, on the other hand, strive not only to expel the ruling aliens but also to change the political and economic structure of our country. While we cannot describe in detail this new political and economic structure in this short proclamation, the basic principles behind it are liberty, equality, and fraternity. The revolutions of yesterday were revolutions by and for the revolutionaries; our revolution, on the other hand, is a revolution by and for the people."
          },
          {
            num: 6,
            source: "Anonymous Chinese artist, \"A Look at China Now and in the Past,\" cartoon published in the Shenzhou Ribao (National Herald) newspaper, Shanghai, 1911",
            figureId: "2023s1-dbq-doc6-china-cartoon",
            text: "In the images, the tiger represents China, and the men represent Western countries.\n\nThe images were labeled as follows:\n[upper left image]: \"China during the Kangxi and Qianlong emperors [seventeenth and eighteenth centuries],\"\n[upper right image]: \"China during the Xianfeng and Tongzhi emperors [first half of the nineteenth century],\"\n[lower left image]: \"China today,\" and\n[lower right image]: \"China in the future.\""
          },
          {
            num: 7,
            source: "The abdication decree of the child emperor Puyi, issued by the regent empress Longyu on Puyi's behalf, officially ending the Qing dynasty, 1912",
            text: "As a consequence of the uprising of the Republican Army, to which different provinces immediately responded, the empire seethed like a boiling cauldron and the people were plunged into utter misery. It is now evident that the hearts of the majority of the people are in favor of a republican form of government: the provinces of the south were the first to espouse the cause, and the generals of the north have since pledged their support. From the preference of the people's hearts, the Will of Heaven can be seen. How could We then bear to oppose the will of millions for the glory of one Family? Therefore, observing the tendencies of the age on the one hand and studying the opinions of the people on the other, We and His Majesty the Emperor hereby grant the sovereignty to the people and decide in favor of a republican form of constitutional government."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 6 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 3 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period circa 1200 to 1450, the expansion of empires such as the Mongol Empire facilitated trade and communication across Eurasia.\n\nDevelop an argument that evaluates the extent to which Mongol expansion affected the peoples of Eurasia during this period." },
          { id: 3, prompt: "In the period circa 1450 to 1750, rulers of land-based empires, such as the Mughal, the Ottoman, and the Safavid empires, used a variety of religious, political, and economic methods to legitimize and consolidate their power.\n\nDevelop an argument that evaluates the extent to which a land-based empire successfully consolidated or expanded its power during this period." },
          { id: 4, prompt: "In the mid- to late twentieth century, a variety of political, military, and nonviolent methods were used to bring about political and social change.\n\nDevelop an argument that evaluates the extent to which an individual, group, or movement in the mid- to late twentieth century successfully challenged existing power structures during this period." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },

  // ========================================================================
  // EXAM 6: Official 2023 Set 2
  // ========================================================================
  {
    id: "official-2023-s2",
    label: "2023 Set 2 \u2014 Official FRQ",
    description: "Official AP World History: Modern 2023 Set 2 free-response questions (SAQ + DBQ + LEQ)",
    badge: "Official",
    year: 2023,
    mcSets: [],
    mcQuestions: [],
    questions: [
      {
        num: 1,
        type: "saq",
        title: "Short Answer Question 1",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "M. Sait \u00d6zervarli, historian, \"Alternative Approaches to Modernization in the Late Ottoman Period,\" scholarly article, published in 2007",
            description: "",
            text: "Late Ottoman society underwent significant modernization, a process that was both caused and accelerated by the state reorganization program, Tanzimat, beginning in 1839. . . . Modern-educated Ottomans soon began to emphasize in their writings the importance of European sciences. . . . Science was seen by many officials and learned figures as the only tool to solve the problems of the empire. . . . This elite group of Westernized Ottoman intellectuals . . . even adopted the belief in the supremacy of science in all aspects of life and proposed to adopt a completely [Westernized] worldview.\n\nHowever, this [Westernized Ottoman] elite was not the only group that focused on modern European thought. Extreme views . . . sparked opposition, especially among religious circles, but they also kindled a general curiosity among . . . a new generation of modern Ottoman religious scholars who emphasized an alternative approach toward modernization. [These scholars] proposed to combine their traditional heritage with modern ideas and methods . . . [and], while advocating the adoption of industrialization and political reforms, rejected a cultural identification with the West."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE nineteenth-century development in the Ottoman Empire that led to the launch of the reform program mentioned in the first paragraph." },
          { letter: "B", prompt: "Identify ONE argument made in the passage concerning the Ottoman elites and modernization in the nineteenth century." },
          { letter: "C", prompt: "Explain how ONE OTHER non-Western state's attempts to modernize in the nineteenth century led to conflicts among members of the elite similar to those described in the passage." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as military defeats against European powers, the Greek War of Independence, or the decline of Ottoman territorial control." },
          { row: "B", category: "Part B", points: 1, description: "Identifies an argument such as Westernized elites believed science was the solution to the empire's problems, or religious scholars proposed combining tradition with selective modernization." },
          { row: "C", category: "Part C", points: 1, description: "Explains a parallel such as the Meiji Restoration in Japan causing tensions between modernizers and traditionalists, or debates in Qing China between self-strengthening reformers and conservatives." }
        ]
      },
      {
        num: 2,
        type: "saq",
        title: "Short Answer Question 2",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Yun Hoe, Korean Confucian scholar and adviser to the Korean Choson monarchy, On the Harmfulness of Buddhism, 1424",
            description: "",
            text: "We consider Buddhists to be a direct threat. For over 1500 years, Buddhism has been spreading in our kingdom, yet neither happiness nor profit has been gained. This is recorded in the historical books, which Your Majesty has certainly studied thoroughly. Must you wait for your ministers to tell you?\n\nWe think of all the unorthodox teachings, Buddhism is the worst. The Buddhists live alone with their barbaric customs, apart from the common productive population; yet they cause the people to be poor and to steal. What is worse than their crimes? Beasts and birds that damage grain are certainly chased away because they harm the people. Yet even though beasts and birds eat the people's food, they are nevertheless useful to the people. Buddhists, however, sit around and eat, and there has not yet been a visible profit."
          }
        ],
        parts: [
          { letter: "A", prompt: "Identify ONE claim the author makes in the passage." },
          { letter: "B", prompt: "Explain ONE way the author's point of view likely influenced his argument." },
          { letter: "C", prompt: "Explain ONE way Chinese cultural traditions influenced Asian societies (other than Korea) in the period 1200\u20131450." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a claim such as Buddhism is harmful to the kingdom, Buddhists are unproductive, or Buddhism has brought neither happiness nor profit." },
          { row: "B", category: "Part B", points: 1, description: "Explains how his Confucian perspective shaped his criticism, such as Confucian emphasis on productive contribution to society, or Confucian skepticism of religious practices that withdraw people from civic life." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as the spread of Neo-Confucianism to Japan and Vietnam, Chinese writing systems influencing Japanese and Vietnamese scripts, or the civil service examination system being adopted by other states." }
        ]
      },
      {
        num: 3,
        type: "saq",
        title: "Short Answer Question 3",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE technological development that contributed to Europeans' ability to spread religious ideas in the Americas during the period 1450\u20131750." },
          { letter: "B", prompt: "Explain ONE way that religion contributed to the process of state expansion and/or exploration in the Americas during the period 1450\u20131750." },
          { letter: "C", prompt: "Explain ONE reason why syncretic belief systems developed in the Americas during the period 1450\u20131750." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a technology such as the printing press for producing religious texts, improved ship design (caravels), or navigational instruments." },
          { row: "B", category: "Part B", points: 1, description: "Explains a way such as the Catholic mission system accompanying Spanish colonization, or religious justifications for conquest (spreading Christianity)." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as Indigenous peoples blending Christian and traditional beliefs, incomplete conversion, or the adaptation of Christianity to local contexts." }
        ]
      },
      {
        num: 4,
        type: "saq",
        title: "Short Answer Question 4",
        required: false,
        points: 3,
        suggestedTime: 13,
        sources: [],
        parts: [
          { letter: "A", prompt: "Identify ONE historical development that contributed to the growth of a global economy during the period circa 1800\u20131914." },
          { letter: "B", prompt: "Explain ONE way governments responded to economic crises or depressions during the period circa 1900\u20131945." },
          { letter: "C", prompt: "Explain ONE way states changed their economies in response to the shifting global balance of power during the period circa 1945\u20131990." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Identifies a development such as industrialization, the expansion of free trade, imperialism integrating colonial economies, or new transportation technologies." },
          { row: "B", category: "Part B", points: 1, description: "Explains a response such as the New Deal in the US, fascist autarky policies, Soviet central planning, or protectionist tariff policies." },
          { row: "C", category: "Part C", points: 1, description: "Explains a way such as import substitution industrialization in Latin America, the creation of economic blocs (NATO vs. Warsaw Pact), or decolonized nations choosing between capitalist and socialist economic models." }
        ]
      },
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which Muslim women in the Middle East challenged social norms in the period circa 1850\u20131950.",
        documents: [
          {
            num: 1,
            source: "Aisha al-Taymuriyya, Egyptian woman poet and novelist, essay titled \"Family Reform Comes Only Through the Education of Girls,\" article published in Al-Adab, a conservative Egyptian newspaper, 1889",
            text: "It is the duty of the male establishment to concern itself with the education of girls and the refinement of families. Take the example of a man in the following situation\u2014his educated wife loves him, comforts him, and expertly manages his household. Despite this, he works to hide her abilities from the rest of society, and fears that by announcing her worth it will be said that she is an educated woman, which will disrupt his peaceful life.\n\nHow astounding that our civilization is obsessed with decorating young women in jewelry, and exaggerating their beauty. But this practice casts these girls into a pit of evil; they have earned nothing from these trinkets but vanity. If male authorities strove for the improvement and progress of these girls' behavior through their education, these women would then find themselves adorned with necklaces strung with pearls of wisdom."
          },
          {
            num: 2,
            source: "Zaynab Fawwaz, Lebanese woman writer, \"Fair and Equal Treatment,\" essay published in an Egyptian newspaper, 1891",
            text: "The fact is that we have not seen any law coming from Islam ruling that women are to be prohibited from involvement in the occupations of men. A woman is just as much a human being as a man is, with complete mental faculties and abilities. So many women have ruled over men, participated in government, determined statutes of law and behavior, recruited soldiers, gone forth into battle, and carried out wars\u2014like the many queens who have preceded us and ran their kingdoms well.\n\nRegarding the poor women in Cairo or Alexandria, most of them pursue work just like men. Among these women are merchants, craft workers, and those earning their livelihood with male laborers in construction and in other professions. We find the markets are full of women capable of competing with men in business and many other activities. The intelligent person who examines the world's affairs finds the two sexes equal."
          },
          {
            num: 3,
            source: "Doria Shafik, Egyptian woman feminist, unpublished memoir written in 1960, describing an event from her childhood that occurred circa 1915",
            text: "An agitated atmosphere reigned in our house that Monday. The cause of this gloom was the news that a family friend had just learned that her husband had taken a second wife, because she had given birth to twin daughters but failed to produce a male heir. Now faced with a second wife in her household she shouted, 'I want a divorce!'\n\nWith that shout an icy silence fell over the room. I was astonished both by the woman's violent reaction as well as the energetic opposition to her decision by the women around her. Grandmother, whose attachment to the past could not be severed so easily, led the campaign. 'I don't understand you women of today insisting on exclusiveness. By taking a second wife the husband reduces the burden on the first woman. When my husband took another wife, I was pleased to have a new friend. And even when he took a third wife we all banded together against him, the common enemy. Never pronounce the word divorce! It brings dishonor for you and your daughters, who will never see a suitor if you act this way,' concluded my grandmother.\n\nMy grandmother's words seemed to act as a whip over the other women as the thought of their daughters being old maids sank in and they all rallied around her. 'Forget this idea,' my mother counseled, 'you must fight to regain your husband's love.'"
          },
          {
            num: 4,
            source: "\"A Feminist Demonstration against British rule in Egypt,\" cover illustration of the French illustrated news magazine Le Petit Journal, 1922",
            figureId: "2023s2-dbq-doc4-egyptian-feminists",
            text: "A caption in French below the image reads, \"While in some streets of the city riots broke out, the women of Cairo organized in certain quarters into important processions.\" A group of British soldiers on horseback is shown in the background (on the left)."
          },
          {
            num: 5,
            source: "Anonymous Turkish woman, interview on the popularity of ballroom dancing, published in the journal Resimli Ay (The Illustrated Monthly), Istanbul, Turkey, 1924",
            text: "When, a few years ago, the dance craze came through I was very hesitant to take it up. My friends would rave about dancing, but I couldn't help thinking that dancing in a man's arms was ridiculous, when just a few years earlier we would not have even been able to sit next to them.\n\nBut my social environment gradually led me to embrace dancing. Those who had already taken it up kept accusing me of stupidity for my refusal to join them. So, even though I was naturally inclined to be conservative, I decided that one must accept these new trends to be modern, or at least to avoid being labeled.\n\nIn order to be able to go to a party organized by one of my friends, I took dance lessons from a Greek lady for three months.\n\nThe dance party was amazing, but my husband's behavior annoyed me to no end. His glances suggested that he did not like seeing me mingle with strange men. That night I danced until morning. I paid no attention to the clumsiness of my feet or to my shyness. I was just excited to be able to punish my husband for his rude behavior."
          },
          {
            num: 6,
            source: "Eastern Women's Congress, an international summit of women from Muslim countries held in Tehran, Iran, under the direction of Princess Ashraf Pahlavi, daughter of the Shah of Iran, resolution, 1932",
            text: "The Congress supports the following:\n\n1. The right of Eastern women to vote and, when qualified, to be elected to office.\n2. Compulsory education for girls and literacy courses for adult women.\n3. Equal salaries to men and women in similar employment.\n4. Kindergartens, playgrounds, and educational cinemas provided by the government.\n5. Measures to improve the morals of Eastern men.\n6. Polygamy must be forbidden.\n7. Alcohol and narcotics should be prohibited.\n8. Hiring female police officers to examine sanitary conditions and improve the lives of mothers and children."
          },
          {
            num: 7,
            source: "Zaynab al-Ghazali, Egyptian woman political activist, leader of the Muslim Women's Association, a group affiliated with the Islamist organization The Muslim Brotherhood, memoir published in 1986, recalling events in the 1940s. Footnote: The Muslim Brotherhood was a group founded in 1928 that advocated for greater influence of Islam in all aspects of Egyptian society.",
            text: "This was the pact that I made with my husband before entering into our marriage:\n\n'There is something in my life that you need to know about before you become my husband. I have sworn an oath of loyalty to Hassan al-Banna [the founder of the Muslim Brotherhood] and have pledged to live my life in God's path and to call others to Islam. I cannot ask you today to share this calling with me, but it is my right to demand that you not block me from pursuing it. When the day comes that my calling leads me to join the ranks of the fighters for the establishment of the Islamic state, do not ask me what I am doing. And if ever the welfare of our marriage conflicts with God's calling, then know that the marriage will end and the calling will become my whole life. I know that, as husband, it is your right to command me and it is my duty to obey you, but know ahead of time that God is greater than us and our marriage and that His calling must be dearer to ourselves than we are to each other.'"
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 6 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 3 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "Global cross-cultural interactions, including the transfer of knowledge, scientific learning, and technological developments, increased throughout the period 1200 to 1750.\n\nDevelop an argument that evaluates the extent to which ongoing cross-cultural interactions affected trade and/or exploration during the period circa 1450 to 1750." },
          { id: 3, prompt: "In the period circa 1750 to 1900, revolutions and independence movements such as the American Revolution, the French Revolution, the Haitian Revolution, and Latin American independence movements occurred around the world.\n\nDevelop an argument that evaluates the extent to which Enlightenment ideas were the primary cause of one of the revolutions or independence movements (other than the American Revolution) from the period circa 1750 to 1900." },
          { id: 4, prompt: "In the twentieth century, revolutionary movements were inspired by a variety of ideologies, including communism, nationalism, and/or religious ideas.\n\nDevelop an argument that evaluates the extent to which a twentieth-century revolutionary movement was inspired by one of these ideologies." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  }
];

export default ALL_TESTS;
