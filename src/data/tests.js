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
  }
];

export default ALL_TESTS;
