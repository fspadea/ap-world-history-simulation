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
          "B", "The Ottoman rejection of Islamic law in favor of secular European legal codes",
          "C", "The incorporation of Islamic legal traditions into the imperial administrative system",
          "D", "The subordination of all religious authority to provincial military commanders"
        ],
        answer: "C"
      },
      {
        num: 14,
        set: 2,
        stem: "The decree's reference to the wellbeing of both Muslim and non-Muslim subjects most directly relates to which of the following Ottoman institutions?",
        choices: [
          "A", "The devshirme system, which recruited Christian boys for military and administrative service",
          "B", "The janissary corps, which served as the elite infantry of the Ottoman military",
          "C", "The millet system, which granted religious communities a degree of self-governance",
          "D", "The capitulation agreements, which gave European merchants special trading privileges"
        ],
        answer: "C"
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
          "B", "Preparing for the empire's transition to a constitutional monarchy",
          "C", "Maintaining central control over a vast and ethnically diverse territory",
          "D", "Establishing diplomatic relations with Western European nation-states"
        ],
        answer: "C"
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
          "B", "The Ottoman adoption of Chinese bureaucratic terminology",
          "C", "The existence of a centralized imperial government that served as the ultimate authority",
          "D", "The weakness of the Ottoman sultan's authority relative to provincial governors"
        ],
        answer: "C"
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
          "A", "The establishment of democratic elections for provincial governors",
          "B", "The adoption of Protestantism by Ottoman subject populations",
          "C", "The complete mechanization of Ottoman agriculture",
          "D", "The increasing use of tax farming, which undermined centralized revenue collection"
        ],
        answer: "D"
      },
      {
        num: 21,
        set: 2,
        stem: "A historian could best use this Ottoman decree as evidence for which of the following claims?",
        choices: [
          "A", "The Ottoman Empire practiced complete religious tolerance with no distinctions between faiths",
          "B", "The Ottoman Empire was a decentralized confederation of independent provinces",
          "C", "Early modern land-based empires developed sophisticated bureaucratic systems to administer diverse territories",
          "D", "Islamic empires rejected all forms of secular governance in favor of purely religious law"
        ],
        answer: "C"
      },
      {
        num: 22,
        set: 2,
        stem: "The decree's emphasis on preventing oppression of subject peoples most likely reflects the Ottoman rulers' recognition that which of the following was essential for imperial stability?",
        choices: [
          "A", "Military expansion into new territories to acquire more revenue",
          "B", "Complete cultural assimilation of all conquered peoples into Turkish identity",
          "C", "The legitimacy derived from presenting the sultan as a just and protective ruler",
          "D", "The elimination of all forms of local self-governance"
        ],
        answer: "C"
      },
      // SET 3 — Questions 23-33: Columbian Exchange / Atlantic World (c. 1450-1750)
      {
        num: 23,
        set: 3,
        stem: "Las Casas's account of Spanish treatment of indigenous peoples in the Americas was most directly intended to achieve which of the following goals?",
        choices: [
          "A", "Encourage further Spanish colonization by demonstrating the wealth of the Americas",
          "B", "Promote the establishment of an independent indigenous state in the Americas",
          "C", "Persuade the Spanish Crown to reform colonial policies and protect indigenous populations",
          "D", "Advocate for the complete withdrawal of all Europeans from the Western Hemisphere"
        ],
        answer: "C"
      },
      {
        num: 24,
        set: 3,
        stem: "The forced labor systems described by Las Casas most directly developed into which of the following colonial institutions?",
        choices: [
          "A", "The asiento system, which regulated the importation of enslaved Africans to the Americas",
          "B", "The headright system, which granted land to English settlers who paid for passage to America",
          "C", "The joint-stock company, which organized European commercial ventures in Asia",
          "D", "The mita system and encomienda, which compelled indigenous labor for Spanish colonizers"
        ],
        answer: "D"
      },
      {
        num: 25,
        set: 3,
        stem: "The population decline described by Las Casas was most significantly caused by which of the following factors?",
        choices: [
          "A", "Voluntary migration of indigenous peoples to Europe and Africa",
          "B", "Widespread indigenous conversion to Christianity, which discouraged large families",
          "C", "The introduction of Old World epidemic diseases to which indigenous peoples had no immunity",
          "D", "The deliberate use of biological weapons by Spanish military forces"
        ],
        answer: "C"
      },
      {
        num: 26,
        set: 3,
        stem: "Las Casas's characterization of indigenous peoples as 'humble, patient, and peaceable' most directly reflects which of the following perspectives?",
        choices: [
          "A", "An accurate anthropological assessment of all indigenous cultures in the Americas",
          "B", "The widespread European scientific consensus about indigenous peoples during the sixteenth century",
          "C", "A strategic rhetorical choice designed to generate sympathy from the Spanish Crown",
          "D", "The views of indigenous leaders who had traveled to Spain to advocate for their own people"
        ],
        answer: "C"
      },
      {
        num: 27,
        set: 3,
        stem: "The consequences of Spanish colonization described by Las Casas most directly contributed to which of the following long-term developments?",
        choices: [
          "A", "The expansion of representative democracy throughout the Americas",
          "B", "The immediate independence of Latin American colonies from Spanish rule",
          "C", "The development of a rigid racial caste system in Spanish colonial society",
          "D", "The decline of the Atlantic slave trade due to moral objections"
        ],
        answer: "C"
      },
      {
        num: 28,
        set: 3,
        stem: "Which of the following was a direct economic consequence of the extraction of gold and silver from the Americas as described by Las Casas?",
        choices: [
          "A", "A decrease in European trade with Asia due to the abundance of American precious metals",
          "B", "The collapse of the Spanish monarchy due to the high cost of transatlantic shipping",
          "C", "A period of significant inflation in Europe and the integration of the Americas into the global economy",
          "D", "The development of paper currency systems throughout Western Europe"
        ],
        answer: "C"
      },
      {
        num: 29,
        set: 3,
        stem: "Las Casas's arguments most directly influenced which of the following?",
        choices: [
          "A", "The Protestant Reformation and its critique of Catholic authority",
          "B", "The French Revolution and its emphasis on universal rights",
          "C", "The debate over the legal and moral status of indigenous peoples, including the Valladolid debate of 1550-1551",
          "D", "The English Civil War and the development of parliamentary sovereignty"
        ],
        answer: "C"
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
          "B", "The development of fully mechanized agricultural production in the Americas",
          "C", "The voluntary return of Spanish colonists to Europe",
          "D", "The increased importation of enslaved Africans to replace indigenous laborers"
        ],
        answer: "D"
      },
      {
        num: 33,
        set: 3,
        stem: "A historian would most likely characterize Las Casas's account as reflecting which of the following broader intellectual trends of the sixteenth century?",
        choices: [
          "A", "The Scientific Revolution's emphasis on empirical observation and data collection",
          "B", "The mercantilist argument for maximizing colonial economic output",
          "C", "The Enlightenment's advocacy for democratic governance and individual rights",
          "D", "The humanist concern with justice and the moral responsibilities of Christian rulers"
        ],
        answer: "D"
      },
      // SET 4 — Questions 34-44: Industrial Revolution & Imperialism (c. 1750-1900)
      {
        num: 34,
        set: 4,
        stem: "Engels's description of working conditions in English factories most directly illustrates which of the following consequences of the Industrial Revolution?",
        choices: [
          "A", "The improvement of public health through advances in medical science",
          "B", "The establishment of government-mandated minimum wages and working conditions",
          "C", "The decline of urbanization as workers returned to agricultural employment",
          "D", "The concentration of wealth and the exploitation of industrial laborers"
        ],
        answer: "D"
      },
      {
        num: 35,
        set: 4,
        stem: "The housing conditions described by Engels most directly resulted from which of the following developments?",
        choices: [
          "A", "Deliberate government policies to relocate rural populations to urban slums",
          "B", "The voluntary preference of workers for crowded living conditions near factories",
          "C", "The destruction of urban housing during the Napoleonic Wars",
          "D", "Rapid urbanization driven by the movement of workers from rural areas to factory towns"
        ],
        answer: "D"
      },
      {
        num: 36,
        set: 4,
        stem: "Engels's observations about the use of child labor in factories most directly contributed to which of the following later developments?",
        choices: [
          "A", "The abolition of slavery throughout the British Empire",
          "B", "The complete mechanization of industry, eliminating the need for human labor",
          "C", "The establishment of universal suffrage for all adult citizens in Britain",
          "D", "The passage of factory reform legislation restricting working hours and child labor"
        ],
        answer: "D"
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
          "B", "The decline of traditional herbal medicine in favor of industrial pharmaceuticals",
          "C", "The deliberate introduction of pathogens by rival European powers",
          "D", "Inadequate sanitation infrastructure and contaminated water supplies in rapidly growing urban areas"
        ],
        answer: "D"
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
          "B", "The decline of maritime trade in the Indian Ocean region",
          "C", "The spread of subsistence agriculture in sub-Saharan Africa",
          "D", "The development of textile manufacturing and industrial labor in Japan during the Meiji era"
        ],
        answer: "D"
      },
      {
        num: 41,
        set: 4,
        stem: "The economic system critiqued by Engels most directly depended on which of the following technological developments?",
        choices: [
          "A", "The invention of the printing press and the spread of literacy",
          "B", "The adoption of gunpowder weapons by European armies",
          "C", "The construction of transcontinental railroad networks in North America",
          "D", "The development of steam power and mechanized textile production"
        ],
        answer: "D"
      },
      {
        num: 42,
        set: 4,
        stem: "The wealth generated by British industrialization, as described by Engels, most directly fueled which of the following global developments?",
        choices: [
          "A", "The decline of British naval power and the rise of Russian maritime dominance",
          "B", "The abolition of all forms of unfree labor throughout the global economy",
          "C", "The peaceful unification of Germany under Prussian diplomatic leadership",
          "D", "European imperialist expansion into Africa and Asia during the nineteenth century"
        ],
        answer: "D"
      },
      {
        num: 43,
        set: 4,
        stem: "A historian analyzing Engels's account should most importantly consider which of the following about the source?",
        choices: [
          "A", "Engels was a wealthy industrialist with no personal experience of working-class life",
          "B", "Engels published his work decades after the conditions he described had been entirely eliminated",
          "C", "Engels's observations were limited to a single factory and cannot be generalized",
          "D", "Engels wrote with the explicit political purpose of advocating for the overthrow of capitalism"
        ],
        answer: "D"
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
          "B", "The decline of nationalist movements in favor of global economic integration",
          "C", "The reunification of previously divided European nation-states",
          "D", "The wave of decolonization that created newly independent nation-states across Africa"
        ],
        answer: "D"
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
  // SIMULATION 2: Practice Simulation 2
  // ========================================================================
  {
    id: "sim2",
    label: "Practice Simulation 2",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        figureId: "sim2-set1-song-dynasty-trade-map",
        title: "Set 1 — Document: Zhao Rugua, Description of the Peoples of the Southern Sea (c. 1225)",
        passage: "Use the map and the passage below to answer Questions 1–11.\n\nZhao Rugua served as the Superintendent of Maritime Trade in the port of Quanzhou during the Southern Song Dynasty. His compilation drew on interviews with foreign and Chinese merchants who traveled the maritime routes of East and Southeast Asia.\n\n\"The kingdom of Srivijaya controls the strait through which all ships must pass on their way between the Indian Ocean and the South China Sea. The ruler levies duties on every vessel that enters his waters and maintains a large fleet to enforce his authority. The merchants of this kingdom trade in frankincense, camphor, sandalwood, and ivory, exchanging them for silk, porcelain, and iron goods from China. The people follow the teachings of the Buddha and construct temples of great magnificence. Chinese merchants who settle there often adopt local customs and marry local women, and their children speak both Chinese and the Malay tongue. The junks that sail these waters carry hundreds of men and are provisioned for voyages of many months.\""
      },
      {
        id: "set2",
        setNum: 2,
        title: "Set 2 — Document: Jean Chardin, Travels in Persia (1686)",
        passage: "Jean Chardin was a French jeweler and traveler who spent extended periods in the Safavid Empire during the reign of Shah Abbas II and Shah Suleiman. His account provides detailed observations of Persian society, economy, and governance.\n\n\"Isfahan is one of the largest and most beautiful cities in the world. Its great bazaar stretches for miles, covered by vaulted brick roofs, and within it one finds merchants from every nation — Armenians, Indians, Turks, and even some Europeans — trading in silks, carpets, spices, and precious stones. The Shah maintains his authority through appointed governors in each province, yet the real power in the countryside often belongs to the tribal chiefs who command the loyalty of their kinsmen. The Persians are devoted followers of the Shia branch of Islam and regard their Shah as the Shadow of God on Earth. The royal workshops produce the finest carpets, textiles, and illustrated manuscripts, and the Shah patronizes poets and scholars who gather at his court. The Armenian merchants of Julfa, whom Shah Abbas I resettled near Isfahan, control much of the silk trade with Europe and enjoy the protection of the crown.\""
      },
      {
        id: "set3",
        setNum: 3,
        title: "Set 3 — Document: Simón Bolívar, Letter from Jamaica (1815)",
        passage: "Simón Bolívar was a Venezuelan military and political leader who played a central role in the independence movements of several South American countries. He wrote this letter while in exile in Jamaica, reflecting on the state of the Spanish American revolutions.\n\n\"We are a small segment of the human race; we possess a world apart, surrounded by vast seas. Although in some ways our situation resembles that of the peoples who freed themselves from Rome, our case is more extraordinary and complex. We have been denied active participation in our own governance. We have been told that we were incapable of directing our own affairs. Under Spanish rule, Americans held no position of authority — not as diplomats, not as military leaders, not as governors. The habit of obedience has robbed us of the experience necessary for self-government. The rights of man and of the citizen, proclaimed with such force by the philosophers of France, have inspired our struggle, yet our path to liberty is obstructed by three centuries of colonial subjugation and by the divisions among our own peoples.\""
      },
      {
        id: "set4",
        setNum: 4,
        title: "Set 4 — Document: Dadabhai Naoroji, Poverty and Un-British Rule in India (1901)",
        passage: "Dadabhai Naoroji was an Indian scholar, businessman, and political leader who served as a member of the British Parliament. He was one of the earliest critics of British economic policy in India and developed the 'drain of wealth' theory.\n\n\"The condition of India is one of continuous and increasing impoverishment. The revenues drawn from the Indian people are spent not for the benefit of India but are transferred to England in the form of salaries for British officials, pensions, military expenditures, and profits extracted by British merchants. India is compelled to export more than she imports, yet the surplus does not enrich her people — it drains away to a foreign land. The once-flourishing textile industries of India have been destroyed by the importation of machine-made British goods, and the artisans who once earned a livelihood have been reduced to starvation. The railroads built by the British serve not the needs of the Indian people but the purpose of carrying raw materials to the ports for export to England. This is not governance; it is a system of organized plunder.\""
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — Document: Ho Chi Minh, Declaration of Independence of the Democratic Republic of Vietnam (1945)",
        passage: "Ho Chi Minh was a Vietnamese revolutionary leader who led the Viet Minh independence movement against both Japanese occupation and French colonial rule. He proclaimed Vietnamese independence in Hanoi on September 2, 1945.\n\n\"All men are created equal; they are endowed by their Creator with certain unalienable Rights; among these are Life, Liberty, and the pursuit of Happiness. This immortal statement was made in the Declaration of Independence of the United States of America in 1776. In a broader sense, this means: All the peoples on the earth are equal from birth, all the peoples have a right to live, to be happy, and to be free. The Declaration of the French Revolution in 1791 also states: All men are born free and with equal rights. Nevertheless, for more than eighty years, the French imperialists, abusing the standard of Liberty, Equality, and Fraternity, have violated our fatherland and oppressed our fellow citizens. They have built more prisons than schools. They have mercilessly slain our patriots. They have drowned our uprisings in rivers of blood.\""
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: Song Dynasty China & East Asian Trade (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "Zhao Rugua's description of Srivijaya's control of maritime straits most directly illustrates which of the following features of Indian Ocean trade in the period c. 1200-1450?",
        choices: [
          "A", "The ability of strategically located states to profit from controlling key trade chokepoints",
          "B", "The dominance of Chinese naval forces throughout Southeast Asian waters",
          "C", "The decline of maritime commerce in favor of overland Silk Road trade",
          "D", "The absence of any state regulation of Indian Ocean commerce"
        ],
        answer: "A"
      },
      {
        num: 2,
        set: 1,
        stem: "The intermarriage between Chinese merchants and local women described in the passage is best understood as an example of which of the following historical processes?",
        choices: [
          "A", "Forced assimilation imposed by the Song Dynasty on overseas communities",
          "B", "Cultural syncretism resulting from sustained commercial contact between different societies",
          "C", "The deliberate Chinese policy of colonizing Southeast Asian territories",
          "D", "The rejection of Chinese culture by merchants who settled abroad"
        ],
        answer: "B"
      },
      {
        num: 3,
        set: 1,
        stem: "The goods exchanged between Srivijaya and China as described by Zhao Rugua most directly reflect which of the following patterns of Indian Ocean trade?",
        choices: [
          "A", "The exchange of raw materials from Southeast Asia for manufactured goods from China",
          "B", "The exclusive trade of military weapons between maritime empires",
          "C", "The dominance of European merchants in facilitating East-West commerce",
          "D", "The decline of Chinese manufacturing during the Song Dynasty"
        ],
        answer: "A"
      },
      {
        num: 4,
        set: 1,
        stem: "The reference to Buddhist temples in Srivijaya most directly supports which of the following claims about the period c. 1200-1450?",
        choices: [
          "A", "Buddhism had completely replaced all indigenous religions in Southeast Asia",
          "B", "Religious traditions spread along trade routes and were adopted by commercial states",
          "C", "The Song Dynasty imposed Buddhism as the official religion of its trading partners",
          "D", "Buddhist monks rather than merchants controlled Indian Ocean trade networks"
        ],
        answer: "B"
      },
      {
        num: 5,
        set: 1,
        stem: "The Song Dynasty's interest in maritime trade, as reflected in the appointment of officials like Zhao Rugua, represented a significant departure from which of the following earlier Chinese practices?",
        choices: [
          "A", "The Tang Dynasty's policy of actively promoting overland trade along the Silk Roads",
          "B", "The traditional Confucian disdain for merchants and preference for an agrarian economy",
          "C", "The Han Dynasty's reliance on maritime trade as the primary source of imperial revenue",
          "D", "The Ming Dynasty's policy of sponsoring large-scale maritime expeditions"
        ],
        answer: "B"
      },
      {
        num: 6,
        set: 1,
        stem: "Which of the following technological developments most directly enabled the long-distance maritime voyages described by Zhao Rugua?",
        choices: [
          "A", "The development of the magnetic compass, stern-post rudder, and improved junk ship design in China",
          "B", "The invention of the steam engine and iron-hulled ships in Britain",
          "C", "The adoption of the lateen sail from European Mediterranean vessels",
          "D", "The construction of canal systems connecting Chinese rivers to the Indian Ocean"
        ],
        answer: "A"
      },
      {
        num: 7,
        set: 1,
        stem: "The economic system described by Zhao Rugua, in which Srivijaya taxed passing trade, is most comparable to which of the following?",
        choices: [
          "A", "The Egyptian Mamluk Sultanate's taxation of goods passing through the Red Sea corridor",
          "B", "The Mongol Empire's practice of destroying all commercial cities in conquered territories",
          "C", "The European feudal system's reliance on agricultural surplus from manorial estates",
          "D", "The Aztec tribute system's collection of goods from conquered peoples through military force"
        ],
        answer: "A"
      },
      {
        num: 8,
        set: 1,
        stem: "A historian could best use Zhao Rugua's account as evidence for which of the following arguments?",
        choices: [
          "A", "The Song Dynasty exercised direct political control over Southeast Asian kingdoms",
          "B", "Chinese commercial networks were deeply integrated into the broader Indian Ocean trading world during the thirteenth century",
          "C", "Southeast Asian states were economically self-sufficient and had no need for foreign trade",
          "D", "Indian Ocean trade declined significantly during the Song Dynasty period"
        ],
        answer: "B"
      },
      {
        num: 9,
        set: 1,
        stem: "The commercial prosperity of Song Dynasty China described by sources like Zhao Rugua was most directly supported by which of the following domestic developments?",
        choices: [
          "A", "The widespread adoption of Christianity by Chinese merchants and officials",
          "B", "The introduction of fast-ripening Champa rice, which increased agricultural productivity and supported population growth",
          "C", "The centralization of all manufacturing in state-owned factories",
          "D", "The elimination of all internal trade barriers through the abolition of the imperial examination system"
        ],
        answer: "B"
      },
      {
        num: 10,
        set: 1,
        stem: "Which of the following best explains why the Song Dynasty relied more heavily on maritime trade than previous Chinese dynasties?",
        choices: [
          "A", "The loss of northern territories to the Jurchen Jin Dynasty cut off access to overland Silk Road routes",
          "B", "The Song Dynasty had conquered all of Southeast Asia and needed to administer its colonies",
          "C", "Maritime trade was cheaper than all forms of overland transport in every period of Chinese history",
          "D", "The Mongol Empire had completely blocked all maritime routes, forcing the Song to find alternatives"
        ],
        answer: "A"
      },
      {
        num: 11,
        set: 1,
        stem: "The networks described by Zhao Rugua were most directly disrupted in the fifteenth century by which of the following developments?",
        choices: [
          "A", "The Ming Dynasty's decision to restrict private overseas trade and the eventual arrival of Portuguese merchants in the Indian Ocean",
          "B", "The complete collapse of Chinese porcelain production due to resource depletion",
          "C", "The conquest of all Southeast Asian states by the Ottoman Empire",
          "D", "The replacement of maritime trade by transcontinental railroad networks"
        ],
        answer: "A"
      },
      // SET 2 — Questions 12-22: Safavid Empire & Persian Culture (c. 1450-1750)
      {
        num: 12,
        set: 2,
        stem: "Chardin's description of Isfahan's bazaar, with merchants from many nations, most directly illustrates which of the following features of the Safavid Empire?",
        choices: [
          "A", "The Safavid Empire's complete isolation from international trade networks",
          "B", "Isfahan's role as a major commercial center connecting overland and maritime trade routes",
          "C", "The Safavid prohibition on foreign merchants entering Persian territory",
          "D", "The decline of urban commercial life under Safavid rule"
        ],
        answer: "B"
      },
      {
        num: 13,
        set: 2,
        stem: "The tension between appointed governors and tribal chiefs described by Chardin most directly reflects which of the following challenges faced by early modern empires?",
        choices: [
          "A", "The difficulty of maintaining centralized authority over diverse and geographically dispersed populations",
          "B", "The complete absence of any system of provincial administration in the Safavid Empire",
          "C", "The Safavid decision to abolish all tribal structures in favor of a purely bureaucratic state",
          "D", "The preference of Safavid shahs for governing through democratic assemblies"
        ],
        answer: "A"
      },
      {
        num: 14,
        set: 2,
        stem: "The Safavid adoption of Shia Islam as the state religion, as referenced by Chardin, most directly served which of the following purposes?",
        choices: [
          "A", "Aligning the Safavid Empire with the religious practices of the Ottoman Empire to promote cooperation",
          "B", "Creating a distinct religious identity that differentiated the Safavid state from its Sunni Ottoman and Mughal rivals",
          "C", "Encouraging the conversion of all European merchants to Islam",
          "D", "Eliminating all forms of religious practice within the Safavid Empire"
        ],
        answer: "B"
      },
      {
        num: 15,
        set: 2,
        stem: "The resettlement of Armenian merchants to Julfa, near Isfahan, as described by Chardin, is most comparable to which of the following practices in other early modern empires?",
        choices: [
          "A", "The Ottoman devshirme system of recruiting Christian boys for service",
          "B", "The Spanish expulsion of Jews and Muslims during the Reconquista",
          "C", "The Qing Dynasty's strategic resettlement of populations to develop frontier regions",
          "D", "The Mughal destruction of all non-Muslim commercial communities"
        ],
        answer: "C"
      },
      {
        num: 16,
        set: 2,
        stem: "The Armenian merchants' role in the Safavid silk trade described by Chardin best illustrates which of the following economic practices of early modern empires?",
        choices: [
          "A", "The absence of any long-distance trade networks in the early modern Middle East",
          "B", "The Safavid policy of prohibiting all subjects from engaging in international trade",
          "C", "The complete dependence of European economies on Safavid manufactured goods",
          "D", "The use of religious and ethnic minority communities as commercial intermediaries connecting empires to global markets"
        ],
        answer: "D"
      },
      {
        num: 17,
        set: 2,
        stem: "The royal patronage of arts and scholarship described by Chardin most directly reflects which of the following characteristics of early modern Islamic empires?",
        choices: [
          "A", "The rejection of all artistic and literary traditions in favor of purely military pursuits",
          "B", "The exclusive reliance on European artists and scholars at the Safavid court",
          "C", "The decline of all forms of artistic achievement during the Safavid period",
          "D", "The use of cultural production to legitimize royal authority and project imperial prestige"
        ],
        answer: "D"
      },
      {
        num: 18,
        set: 2,
        stem: "Which of the following best explains why the Safavid Empire's economy was particularly dependent on the silk trade during the period described by Chardin?",
        choices: [
          "A", "Silk was the only commodity produced anywhere in the Safavid Empire",
          "B", "Silk was used exclusively for military uniforms and had no civilian applications",
          "C", "The Safavid Empire had conquered China and controlled all global silk production",
          "D", "European demand for Persian silk provided crucial revenue, and Shah Abbas I had established state monopolies over its production and export"
        ],
        answer: "D"
      },
      {
        num: 19,
        set: 2,
        stem: "A historian using Chardin's account as a source would most need to consider which of the following limitations?",
        choices: [
          "A", "Chardin never visited Persia and based his account entirely on secondhand reports",
          "B", "Chardin was an official of the Safavid government and therefore could not criticize its policies",
          "C", "Chardin's account was written in Persian and has never been accurately translated",
          "D", "As a European observer, Chardin's perspective was shaped by his own cultural assumptions and may have misunderstood certain Persian institutions"
        ],
        answer: "D"
      },
      {
        num: 20,
        set: 2,
        stem: "The description of the Shah as the 'Shadow of God on Earth' most directly reflects which of the following concepts in Safavid political ideology?",
        choices: [
          "A", "The separation of religious and political authority characteristic of European Enlightenment thought",
          "B", "The divine right of kings as articulated by European monarchs like Louis XIV",
          "C", "The Safavid claim to religious as well as political authority, rooted in their descent from Sufi spiritual leaders",
          "D", "The Safavid rejection of Islam in favor of Zoroastrian religious traditions"
        ],
        answer: "C"
      },
      {
        num: 21,
        set: 2,
        stem: "The Safavid Empire's relationships with its neighbors, as implied by Chardin's account, were most significantly shaped by which of the following?",
        choices: [
          "A", "The Safavid Empire's voluntary subordination to Mughal political authority",
          "B", "A stable alliance with the Ottoman Empire based on shared Shia religious beliefs",
          "C", "Complete diplomatic isolation from all other states in the region",
          "D", "Persistent military and ideological rivalry with the Sunni Ottoman Empire over religious legitimacy and territorial control"
        ],
        answer: "D"
      },
      {
        num: 22,
        set: 2,
        stem: "Which of the following developments most directly contributed to the decline of the Safavid Empire in the decades following Chardin's visit?",
        choices: [
          "A", "The discovery of the Americas, which eliminated European demand for Asian goods",
          "B", "The Industrial Revolution in Europe, which destroyed the market for all handcrafted Persian goods",
          "C", "The Safavid conversion to Sunni Islam, which alienated the majority of the population",
          "D", "Weak successors to Shah Abbas I, increasing provincial autonomy, and military pressure from Afghan tribal forces"
        ],
        answer: "D"
      },
      // SET 3 — Questions 23-33: Atlantic Revolutions & Enlightenment (c. 1750-1900)
      {
        num: 23,
        set: 3,
        stem: "Bolívar's reference to the 'rights of man and of the citizen, proclaimed by the philosophers of France' most directly reflects the influence of which of the following on Latin American independence movements?",
        choices: [
          "A", "The Protestant Reformation and its emphasis on individual interpretation of scripture",
          "B", "Romantic nationalism and its celebration of ethnic and linguistic identity",
          "C", "The Scientific Revolution and its emphasis on empirical methods of inquiry",
          "D", "Enlightenment political philosophy, particularly concepts of natural rights and popular sovereignty"
        ],
        answer: "D"
      },
      {
        num: 24,
        set: 3,
        stem: "Bolívar's complaint that Americans 'held no position of authority' under Spanish rule most directly addresses which of the following features of the colonial system?",
        choices: [
          "A", "The encomienda system's exploitation of indigenous labor",
          "B", "The mercantilist restrictions on colonial manufacturing and trade",
          "C", "The Spanish Inquisition's persecution of religious minorities in the Americas",
          "D", "The exclusion of creoles (American-born Spaniards) from high-ranking administrative and military positions, which were reserved for peninsulares"
        ],
        answer: "D"
      },
      {
        num: 25,
        set: 3,
        stem: "Bolívar's argument that 'the habit of obedience has robbed us of the experience necessary for self-government' most directly raises concerns about which of the following challenges facing newly independent nations?",
        choices: [
          "A", "The refusal of the Catholic Church to support Latin American independence",
          "B", "The inability of Latin American nations to develop any form of economic activity",
          "C", "The difficulty of establishing stable democratic institutions in societies with no tradition of self-governance",
          "D", "The complete absence of any educated elite in the Spanish American colonies"
        ],
        answer: "C"
      },
      {
        num: 26,
        set: 3,
        stem: "Bolívar's comparison of the Spanish American situation to 'peoples who freed themselves from Rome' most directly serves which of the following rhetorical purposes?",
        choices: [
          "A", "Suggesting that Latin Americans should adopt Roman political institutions after independence",
          "B", "Claiming that the Spanish Empire was militarily weaker than the Roman Empire",
          "C", "Arguing that Latin American independence was part of a longer historical tradition of peoples resisting imperial domination",
          "D", "Demonstrating that European civilization was superior to all others"
        ],
        answer: "C"
      },
      {
        num: 27,
        set: 3,
        stem: "The 'divisions among our own peoples' mentioned by Bolívar most directly refers to which of the following social realities of colonial Spanish America?",
        choices: [
          "A", "Religious conflicts between Catholics and Protestants in the colonies",
          "B", "Geographic isolation that prevented communication between different colonial regions",
          "C", "Linguistic barriers between Spanish-speaking and English-speaking colonists",
          "D", "Racial and class divisions within the colonial caste system separating peninsulares, creoles, mestizos, indigenous peoples, and enslaved Africans"
        ],
        answer: "D"
      },
      {
        num: 28,
        set: 3,
        stem: "Which of the following events most directly precipitated the crisis that enabled the Spanish American independence movements described by Bolívar?",
        choices: [
          "A", "The Seven Years' War and the subsequent imposition of new British taxes on the American colonies",
          "B", "The abolition of slavery by the British Parliament, which destabilized colonial economies",
          "C", "The Congress of Vienna's decision to restore absolute monarchy throughout Europe and the Americas",
          "D", "Napoleon's invasion of Spain in 1808, which undermined the legitimacy of Spanish royal authority in the colonies"
        ],
        answer: "D"
      },
      {
        num: 29,
        set: 3,
        stem: "The political ideas expressed by Bolívar were most similar to those articulated in which of the following documents?",
        choices: [
          "A", "The Communist Manifesto by Karl Marx and Friedrich Engels",
          "B", "The Treaty of Westphalia ending the Thirty Years' War",
          "C", "The Ninety-Five Theses by Martin Luther",
          "D", "The United States Declaration of Independence and the French Declaration of the Rights of Man and of the Citizen"
        ],
        answer: "D"
      },
      {
        num: 30,
        set: 3,
        stem: "Which of the following best describes a significant outcome of the independence movements led by figures like Bolívar?",
        choices: [
          "A", "The establishment of stable democracies with universal suffrage throughout Latin America",
          "B", "The reunification of all former Spanish colonies into a single federal republic",
          "C", "The immediate abolition of all racial and class distinctions in the new republics",
          "D", "The creation of independent nation-states that often experienced political instability, caudillo rule, and continued social inequality"
        ],
        answer: "D"
      },
      {
        num: 31,
        set: 3,
        stem: "Bolívar's letter reflects the broader influence of the Atlantic revolutions on global political change. Which of the following revolutions was most directly influenced by the same Enlightenment ideas Bolívar references?",
        choices: [
          "A", "The Glorious Revolution of 1688 in England",
          "B", "The Meiji Restoration of 1868 in Japan",
          "C", "The Taiping Rebellion of 1850-1864 in China",
          "D", "The Haitian Revolution of 1791-1804"
        ],
        answer: "D"
      },
      {
        num: 32,
        set: 3,
        stem: "A historian studying Bolívar's Letter from Jamaica would most likely use it as evidence for which of the following claims?",
        choices: [
          "A", "Latin American independence leaders were primarily motivated by economic concerns rather than political ideals",
          "B", "The Spanish American independence movements were led exclusively by indigenous peoples",
          "C", "Enlightenment ideas were adapted and applied to colonial contexts by creole elites seeking to justify self-governance",
          "D", "Bolívar rejected all European intellectual traditions in favor of purely American ideas"
        ],
        answer: "C"
      },
      {
        num: 33,
        set: 3,
        stem: "Which of the following best describes a significant difference between the American Revolution and the Latin American independence movements described by Bolívar?",
        choices: [
          "A", "The American Revolution was influenced by Enlightenment ideas while Latin American movements were not",
          "B", "The American Revolution resulted in political instability while Latin American independence produced stable democracies",
          "C", "Latin American societies were more racially and socially stratified, creating deeper internal divisions that complicated the independence process",
          "D", "Latin American independence movements occurred before the American Revolution and served as its inspiration"
        ],
        answer: "C"
      },
      // SET 4 — Questions 34-44: New Imperialism in Africa & Asia (c. 1750-1900)
      {
        num: 34,
        set: 4,
        stem: "Naoroji's 'drain of wealth' theory, as presented in the passage, most directly challenges which of the following justifications for British imperialism in India?",
        choices: [
          "A", "The claim that British rule modernized India and improved its economic prosperity",
          "B", "The argument that India had no economic resources worth exploiting",
          "C", "The belief that Indian civilization was older and more advanced than British civilization",
          "D", "The theory that colonial territories naturally benefited from being part of a larger empire"
        ],
        answer: "A"
      },
      {
        num: 35,
        set: 4,
        stem: "Naoroji's description of the destruction of Indian textile industries most directly resulted from which of the following developments?",
        choices: [
          "A", "Indian artisans' voluntary abandonment of textile production in favor of agriculture",
          "B", "The Indian Mutiny of 1857, which destroyed most textile manufacturing centers",
          "C", "The flooding of Indian markets with cheaper, machine-produced British textiles following the Industrial Revolution",
          "D", "The British government's policy of investing heavily in Indian industrial development"
        ],
        answer: "C"
      },
      {
        num: 36,
        set: 4,
        stem: "Naoroji's critique of railroads built by the British in India most directly illustrates which of the following patterns of imperial economic development?",
        choices: [
          "A", "Infrastructure was designed to facilitate the extraction and export of raw materials rather than to serve the needs of local populations",
          "B", "Colonial railroads were entirely funded by Indian taxpayers and operated for their benefit",
          "C", "The British refused to build any modern infrastructure in India",
          "D", "Indian railroads were used exclusively for passenger transport and had no economic function"
        ],
        answer: "A"
      },
      {
        num: 37,
        set: 4,
        stem: "Naoroji's arguments are best understood within the context of which of the following broader intellectual and political movements?",
        choices: [
          "A", "The Social Darwinist movement, which justified European racial superiority",
          "B", "The Pan-Islamic movement, which sought to unite all Muslim peoples against European domination",
          "C", "The early Indian nationalist movement, which used economic analysis to critique British colonial policies",
          "D", "The Marxist revolutionary movement, which called for the immediate violent overthrow of all governments"
        ],
        answer: "C"
      },
      {
        num: 38,
        set: 4,
        stem: "The economic relationship between Britain and India described by Naoroji is most comparable to which of the following?",
        choices: [
          "A", "The relationship between the United States and the Soviet Union during the Cold War",
          "B", "The relationship between China and its Central Asian trading partners along the Silk Road",
          "C", "The relationship between European colonial powers and African colonies during the Scramble for Africa",
          "D", "The relationship between the Roman Empire and its federated Germanic allies"
        ],
        answer: "C"
      },
      {
        num: 39,
        set: 4,
        stem: "Which of the following best explains why Naoroji chose to present his arguments in terms of economic data rather than moral or religious appeals?",
        choices: [
          "A", "He believed that factual economic evidence would be more persuasive to British audiences who valued empiricism and rational argument",
          "B", "Indian culture had no tradition of moral or philosophical reasoning",
          "C", "The British government had prohibited all non-economic arguments against colonial rule",
          "D", "Economic arguments were the only type of criticism permitted by the Indian National Congress"
        ],
        answer: "A"
      },
      {
        num: 40,
        set: 4,
        stem: "Naoroji's critique of British rule in India most directly influenced which of the following later developments?",
        choices: [
          "A", "The British decision to immediately grant India full independence in 1901",
          "B", "The British expansion of colonial territories in Southeast Asia",
          "C", "The growth of the Indian independence movement, including the strategies of leaders like Gandhi and Nehru",
          "D", "The decline of nationalist movements in India in favor of acceptance of British rule"
        ],
        answer: "C"
      },
      {
        num: 41,
        set: 4,
        stem: "The 'New Imperialism' of the late nineteenth century, which Naoroji critiques, differed from earlier forms of European expansion primarily in which of the following ways?",
        choices: [
          "A", "It involved the direct political control of vast territories in Africa and Asia, driven by industrial demand for raw materials and strategic competition",
          "B", "It was limited entirely to the Western Hemisphere and did not affect Africa or Asia",
          "C", "It was motivated exclusively by religious missionary activity with no economic component",
          "D", "It was characterized by peaceful negotiation rather than military conquest"
        ],
        answer: "A"
      },
      {
        num: 42,
        set: 4,
        stem: "Which of the following was a major factor enabling European imperial expansion in Africa and Asia during the period Naoroji describes?",
        choices: [
          "A", "The voluntary invitation of European powers by African and Asian rulers to govern their territories",
          "B", "The collapse of all indigenous political structures before any European contact",
          "C", "Technological advantages including steamships, the telegraph, quinine, and advanced weaponry",
          "D", "The complete absence of any resistance to European rule in colonized territories"
        ],
        answer: "C"
      },
      {
        num: 43,
        set: 4,
        stem: "A historian analyzing Naoroji's account should most importantly consider which of the following about the author's perspective?",
        choices: [
          "A", "Naoroji had never visited India and had no firsthand knowledge of conditions there",
          "B", "Naoroji was a British government official who was defending colonial policies",
          "C", "As an Indian nationalist, Naoroji may have emphasized the negative economic effects of British rule to support his political arguments for greater Indian self-governance",
          "D", "Naoroji's account was written before British rule began and therefore describes a hypothetical situation"
        ],
        answer: "C"
      },
      {
        num: 44,
        set: 4,
        stem: "The pattern of economic exploitation Naoroji describes in India was most directly resisted in which of the following ways during the early twentieth century?",
        choices: [
          "A", "The swadeshi movement, which promoted Indian-made goods and boycotted British manufactures",
          "B", "The complete militarization of Indian society and the declaration of war against Britain",
          "C", "The voluntary return of all British profits to the Indian treasury",
          "D", "The Indian adoption of British economic models without modification"
        ],
        answer: "A"
      },
      // SET 5 — Questions 45-55: Global Cold War & Decolonization (c. 1900-present)
      {
        num: 45,
        set: 5,
        stem: "Ho Chi Minh's deliberate quotation of the United States Declaration of Independence in his speech most directly served which of the following purposes?",
        choices: [
          "A", "Expressing admiration for American culture and requesting annexation by the United States",
          "B", "Rejecting all Western political thought in favor of traditional Vietnamese values",
          "C", "Appealing to American ideals of self-determination to legitimize Vietnamese independence and highlight the hypocrisy of Western colonial powers",
          "D", "Demonstrating that the Vietnamese revolution was identical in all respects to the American Revolution"
        ],
        answer: "C"
      },
      {
        num: 46,
        set: 5,
        stem: "Ho Chi Minh's accusation that the French 'built more prisons than schools' most directly addresses which of the following criticisms of European colonialism?",
        choices: [
          "A", "The failure of colonial powers to fulfill their stated 'civilizing mission' and instead using repression to maintain control",
          "B", "The French policy of investing heavily in Vietnamese education at the expense of public safety",
          "C", "The complete absence of any French presence in Vietnamese civil administration",
          "D", "The Vietnamese preference for traditional education over French-style schooling"
        ],
        answer: "A"
      },
      {
        num: 47,
        set: 5,
        stem: "The timing of Ho Chi Minh's declaration in September 1945 was most directly influenced by which of the following events?",
        choices: [
          "A", "The French defeat of Japan and reestablishment of colonial authority in Indochina",
          "B", "The United Nations' declaration granting immediate independence to all colonial territories",
          "C", "The Japanese surrender ending World War II, which created a power vacuum in colonial Southeast Asia",
          "D", "The Soviet Union's invasion of Southeast Asia to establish communist governments"
        ],
        answer: "C"
      },
      {
        num: 48,
        set: 5,
        stem: "Ho Chi Minh's blending of Enlightenment political philosophy with anti-colonial nationalism is most comparable to the approach taken by which of the following leaders?",
        choices: [
          "A", "Otto von Bismarck, who unified Germany through conservative realpolitik",
          "B", "Jawaharlal Nehru, who combined democratic ideals with anti-imperial resistance in India",
          "C", "Joseph Stalin, who rejected all Western political thought in favor of Marxist-Leninist ideology",
          "D", "Benito Mussolini, who promoted authoritarian fascism as an alternative to liberal democracy"
        ],
        answer: "B"
      },
      {
        num: 49,
        set: 5,
        stem: "The Vietnamese independence movement led by Ho Chi Minh most directly became entangled in which of the following global conflicts?",
        choices: [
          "A", "World War I and the Paris Peace Conference of 1919",
          "B", "The Cold War, as the United States and Soviet Union supported opposing sides in the struggle for Vietnam",
          "C", "The Arab-Israeli conflict and the struggle over Palestinian self-determination",
          "D", "The Sino-Japanese War and Japan's attempt to establish a Pacific empire"
        ],
        answer: "B"
      },
      {
        num: 50,
        set: 5,
        stem: "Which of the following best describes the broader pattern of decolonization that Ho Chi Minh's declaration represents?",
        choices: [
          "A", "A peaceful and voluntary process in which European powers willingly granted independence to all their colonies",
          "B", "A global wave of independence movements in Asia and Africa fueled by wartime disruption, nationalist ideologies, and Cold War dynamics",
          "C", "A process limited entirely to Southeast Asia that had no parallel in other regions",
          "D", "A movement led exclusively by communist revolutionary parties with no nationalist component"
        ],
        answer: "B"
      },
      {
        num: 51,
        set: 5,
        stem: "The French response to Ho Chi Minh's declaration of independence most directly led to which of the following?",
        choices: [
          "A", "The immediate recognition of Vietnamese independence by France and the United Nations",
          "B", "The First Indochina War (1946-1954), in which France attempted to reassert colonial control over Vietnam",
          "C", "A peaceful negotiation resulting in Vietnamese autonomy within the French Union",
          "D", "The French withdrawal from all colonial territories worldwide"
        ],
        answer: "B"
      },
      {
        num: 52,
        set: 5,
        stem: "Ho Chi Minh's reference to the French Revolution's principles of 'Liberty, Equality, and Fraternity' most directly illustrates which of the following features of twentieth-century anti-colonial movements?",
        choices: [
          "A", "The wholesale rejection of all European ideas by colonized peoples",
          "B", "The strategic appropriation of Western political ideals to expose the contradictions between European principles and colonial practices",
          "C", "The desire of all colonized peoples to become culturally identical to their European rulers",
          "D", "The irrelevance of European political thought to anti-colonial struggles"
        ],
        answer: "B"
      },
      {
        num: 53,
        set: 5,
        stem: "The Non-Aligned Movement, which Vietnam and other newly independent nations joined, was most directly a response to which of the following Cold War dynamics?",
        choices: [
          "A", "The threat of nuclear war between the United States and China",
          "B", "The pressure on developing nations to choose sides between the Western and Eastern blocs, often at the cost of national sovereignty",
          "C", "The expansion of the European Union into Asia and Africa",
          "D", "The decline of international organizations like the United Nations"
        ],
        answer: "B"
      },
      {
        num: 54,
        set: 5,
        stem: "Which of the following best describes a major long-term consequence of the decolonization process exemplified by Vietnam's struggle for independence?",
        choices: [
          "A", "The complete elimination of all economic ties between former colonies and former colonial powers",
          "B", "The emergence of new nation-states that often struggled with political instability, economic dependency, and the legacies of colonial boundaries and institutions",
          "C", "The immediate achievement of economic prosperity and political stability by all newly independent nations",
          "D", "The return of colonial rule in most formerly colonized territories by the end of the twentieth century"
        ],
        answer: "B"
      },
      {
        num: 55,
        set: 5,
        stem: "A historian studying Ho Chi Minh's declaration would most likely use it as evidence for which of the following arguments about decolonization?",
        choices: [
          "A", "Anti-colonial leaders selectively drew on multiple intellectual traditions, including Western liberalism and Marxism, to build broad coalitions for independence",
          "B", "All decolonization movements were purely communist in ideology and had no connection to liberal political thought",
          "C", "The United States consistently supported anti-colonial movements during the Cold War era",
          "D", "Ho Chi Minh was primarily motivated by religious rather than political considerations"
        ],
        answer: "A"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, Zheng He's voyages
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Zheng He's Voyages",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Ma Huan, The Overall Survey of the Ocean's Shores (c. 1433)",
            description: "Ma Huan was a Chinese Muslim interpreter who accompanied Admiral Zheng He on three of his seven voyages through the Indian Ocean. His account describes the peoples, customs, and trade goods of the lands they visited.",
            text: "When the treasure ships of the imperial fleet arrived at the kingdom of Calicut on the coast of India, the local king sent officials in small boats to welcome them. The people of this land are divided into five classes, and the Muslims among them are treated with respect and permitted to conduct their religious practices freely. The merchants deal in pepper, precious stones, pearls, and coral, and they use gold and silver coins for their transactions. The treasure ships carried silk, porcelain, musk, and other Chinese goods, which were exchanged according to prices agreed upon by officials of both sides. The Admiral presented gifts from the Emperor of China to the local king, including silk robes, gold, and silver, and received in return tribute of local products and a letter of gratitude to the Son of Heaven."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE purpose of Zheng He's voyages as illustrated by the source." },
          { letter: "B", prompt: "Explain ONE way that Zheng He's voyages reflected the political goals of the early Ming Dynasty." },
          { letter: "C", prompt: "Explain ONE reason why the Ming Dynasty ended the voyages after 1433." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a purpose such as establishing tributary relationships, projecting Chinese imperial prestige, facilitating diplomatic exchanges, or promoting trade in Chinese goods like silk and porcelain." },
          { row: "B", category: "Part B", points: 1, description: "Explains a political goal such as demonstrating Ming power after the overthrow of the Mongol Yuan Dynasty, asserting Chinese centrality in the regional order, securing diplomatic recognition from foreign rulers, or extending the tribute system." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as the enormous cost of the expeditions, Confucian officials' opposition to maritime ventures and commerce, the perceived greater threat from northern nomadic peoples, or the political triumph of the scholar-gentry over court eunuchs who sponsored the voyages." }
        ]
      },
      // SAQ 2 — Secondary source, nationalism & independence movements
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — Nationalism and Independence Movements",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source 1",
            title: "Photograph of Mahatma Gandhi leading the Salt March, India, 1930",
            description: "Gandhi led a 240-mile march to the sea to protest the British salt tax, a key moment in India's independence movement.",
            figureId: "sim2-saq2-gandhi-salt-march",
            text: ""
          },
          {
            label: "Source 2",
            title: "Benedict Anderson, Imagined Communities: Reflections on the Origin and Spread of Nationalism (1983)",
            description: "Benedict Anderson was a political scientist and historian who studied the origins and global spread of nationalist ideologies. This excerpt is from his influential study of how national identities are constructed.",
            text: "The nation is an imagined political community — imagined because the members of even the smallest nation will never know most of their fellow members, meet them, or even hear of them, yet in the minds of each lives the image of their communion. Nationalism in the colonial world was shaped by the administrative and educational institutions of the colonial state itself. Colonial boundaries created the framework within which new national identities took shape. The spread of print capitalism — newspapers, novels, and pamphlets in vernacular languages — enabled people who had never met to imagine themselves as part of a shared national community, turning colonial subjects into citizens of nations yet to be born."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way that colonial institutions contributed to the development of nationalist movements, according to Anderson's argument." },
          { letter: "B", prompt: "Explain ONE specific historical example that supports Anderson's claim that colonial boundaries shaped new national identities." },
          { letter: "C", prompt: "Explain ONE limitation of Anderson's argument when applied to a specific nationalist or independence movement." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes how colonial institutions fostered nationalism, such as Western-style education creating a class of educated elites who articulated nationalist ideas, colonial administrative units providing the territorial basis for future nations, or colonial languages becoming shared languages of resistance." },
          { row: "B", category: "Part B", points: 1, description: "Provides a specific example such as Indian nationalism developing within the boundaries of British India, Indonesian nationalism emerging within the Dutch East Indies, or Nigerian national identity forming around the borders drawn by British colonizers despite the country's diverse ethnic groups." },
          { row: "C", category: "Part C", points: 1, description: "Explains a limitation such as nationalism sometimes preceding colonial boundaries (as in China or Japan), ethnic and religious identities often proving stronger than national identity (as in the partition of India), or the role of pre-colonial cultural traditions in shaping resistance that Anderson's framework underemphasizes." }
        ]
      },
      // SAQ 3 — No stimulus, Environmental changes from Columbian Exchange
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Environmental Changes from the Columbian Exchange",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way the introduction of Old World species to the Americas transformed the environment in the period c. 1450-1750." },
          { letter: "B", prompt: "Explain ONE way the transfer of New World crops to Afro-Eurasia affected population growth or agricultural practices." },
          { letter: "C", prompt: "Explain ONE way the environmental changes of the Columbian Exchange contributed to changes in labor systems in the Americas." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an environmental transformation such as the introduction of horses and cattle transforming the Great Plains, European livestock overgrazing and altering landscapes, the spread of Old World weeds and grasses displacing native plant species, or deforestation from sugar plantation agriculture." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the introduction of potatoes and maize enabling population growth in Europe, Africa, and China; the adoption of American crops allowing cultivation of previously marginal lands; or the role of new calorie-dense crops in supporting urbanization and industrialization." },
          { row: "C", category: "Part C", points: 1, description: "Explains a connection such as the demographic collapse of indigenous populations from disease leading to the importation of enslaved Africans, the expansion of plantation agriculture (sugar, tobacco) creating demand for coerced labor, or the development of the hacienda system to exploit American land with mixed labor forces." }
        ]
      },
      // SAQ 4 — No stimulus, Women in revolutionary movements
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Women in Revolutionary Movements",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE role women played in revolutionary or independence movements in the period c. 1750-1900." },
          { letter: "B", prompt: "Explain ONE way that revolutionary ideals about rights and equality affected women's demands for greater political or social participation." },
          { letter: "C", prompt: "Explain ONE reason why women's gains during revolutionary periods were often limited or reversed after the revolutions ended." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a role such as women's participation in the French Revolution (the March on Versailles, political clubs), women serving as spies and suppliers in Latin American independence wars, women's involvement in abolitionist movements, or women's roles in the Haitian Revolution." },
          { row: "B", category: "Part B", points: 1, description: "Explains how revolutionary ideals affected women's demands, such as Olympe de Gouges's Declaration of the Rights of Woman (1791) applying Enlightenment principles to argue for women's equality, the Seneca Falls Convention of 1848 using the language of the Declaration of Independence, or women in nationalist movements arguing that national liberation required gender equality." },
          { row: "C", category: "Part C", points: 1, description: "Explains a reason such as the persistence of patriarchal social structures, the reassertion of traditional gender roles after the crisis period ended, the Napoleonic Code's restriction of women's rights after the French Revolution, or male revolutionary leaders viewing women's participation as temporary and exceptional rather than permanent." }
        ]
      },
      // DBQ — Transatlantic slave trade effects on Africa and the Americas (c. 1500-1800)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which the transatlantic slave trade transformed societies in both Africa and the Americas in the period c. 1500-1800.",
        documents: [
          {
            num: 1,
            source: "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano (1789)",
            text: "I was soon put down under the decks, and there I received such a greeting in my nostrils as I had never experienced in my life. The closeness of the place and the heat, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. The shrieks of the women, and the groans of the dying, rendered the whole a scene of horror almost inconceivable. I now wished for the last friend, death, to relieve me."
          },
          {
            num: 2,
            source: "King Nzinga Mbemba (Afonso I) of Kongo, Letter to King João III of Portugal (1526)",
            text: "Each day the traders are kidnapping our people — children of this country, sons of our nobles and vassals, even people of our own family. This corruption and depravity are so widespread that our land is entirely depopulated. We need in this kingdom only priests and schoolteachers, and no merchandise, unless it be wine and flour for the holy sacrament. It is our wish that this kingdom not be a place for the trade or transport of slaves."
          },
          {
            num: 3,
            source: "Adapted from a table showing estimated numbers of enslaved Africans transported across the Atlantic by European powers, 1500-1800",
            text: "Portugal/Brazil: approximately 4.6 million; Britain: approximately 2.7 million; France: approximately 1.3 million; Spain: approximately 1.1 million; Netherlands: approximately 500,000; Total: approximately 10.2 million. The peak decades of the trade were the 1780s and 1790s, when approximately 80,000 Africans were transported annually."
          },
          {
            num: 4,
            source: "Father António Vieira, Sermon to the Slaves of a Sugar Mill in Bahia, Brazil (1633)",
            text: "You are told that your condition resembles that of Christ upon the cross, and that your sufferings in this life will be rewarded in the next. Consider that in your captivity you have been brought to the knowledge of the true faith and baptized in the holy waters of the Church. Your masters owe you sustenance and instruction in the faith, and you owe them your obedience and labor. Such is the order that God in His wisdom has ordained."
          },
          {
            num: 5,
            source: "Willem Bosman, A New and Accurate Description of the Coast of Guinea (1705)",
            text: "The trade here in slaves is conducted by the African kings and merchants themselves. When one nation makes war upon another, the captives are brought to the coast and sold to the Europeans. The kings grow rich from this commerce and purchase firearms, cloth, and spirits from us in return. Those kings who refuse to participate in the trade find themselves at a disadvantage, for their rivals, armed with European weapons, grow stronger while they grow weaker."
          },
          {
            num: 6,
            source: "Adapted from plantation records of a sugar estate in Saint-Domingue (Haiti), 1770",
            text: "Total enslaved workers: 215. Deaths this year: 32. New purchases to replace losses: 28. Children born: 6. The overseer reports that the work regimen during the harvest requires 18-hour days. The average working life of a newly arrived African on the estate is estimated at seven years. Expenditure on food for the enslaved: 4% of operating costs. Revenue from sugar and rum exports: 180,000 livres."
          },
          {
            num: 7,
            source: "Alexander Falconbridge, An Account of the Slave Trade on the Coast of Africa (1788)",
            figureId: "sim2-dbq-doc4-slave-ship-diagram",
            text: "The traders on the African coast told me that the interior wars, which formerly were undertaken for territorial disputes or matters of honour, have now become principally wars for the purpose of making slaves to sell to the Europeans. Entire villages are attacked and their inhabitants carried off. The chiefs who engage in this traffic have become dependent upon European goods — particularly firearms, gunpowder, and rum — and must continue to supply captives in order to obtain them."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — Migration across periods
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, evaluate the extent to which migrations of peoples transformed the political and cultural landscapes of Afro-Eurasia." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which migration across the Atlantic world transformed the societies of the Americas." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which industrialization drove new patterns of migration and transformed the societies that migrants entered." }
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
  // SIMULATION 3: Practice Simulation 3
  // ========================================================================
  {
    id: "sim3",
    label: "Practice Simulation 3",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        figureId: "sim3-set1-indian-ocean-trade-map",
        title: "Set 1 — Indian Ocean Trade Networks & the Swahili Coast (c. 1200-1450)",
        passage: "The Indian Ocean served as one of the most dynamic zones of exchange in the premodern world. Seasonal monsoon winds allowed merchants from East Africa, Arabia, Persia, India, Southeast Asia, and China to participate in a vast commercial network. Along the East African coast, a string of city-states — including Kilwa, Mombasa, and Mogadishu — flourished as intermediaries in this trade. The Moroccan traveler Ibn Battuta, visiting Kilwa in 1331, described it as one of the most beautiful cities in the world, noting its stone buildings, mosques, and thriving markets. Archaeological excavations at Kilwa and other Swahili sites have uncovered Chinese porcelain fragments dating from the Song and Yuan dynasties, Indian glass beads, and Persian ceramics, testifying to the breadth of the trade connections. Swahili, a Bantu language enriched with Arabic loanwords, emerged as a lingua franca of commerce along the coast. Local rulers converted to Islam, which facilitated their participation in the broader commercial networks of the Islamic world, while also retaining many indigenous African cultural practices."
      },
      {
        id: "set2",
        setNum: 2,
        title: "Set 2 — The Spanish Colonial Empire in the Americas (c. 1450-1750)",
        passage: "The Spanish Empire in the Americas was built upon the conquest of indigenous civilizations and the exploitation of their labor and resources. The encomienda system granted Spanish colonists the right to demand tribute and labor from indigenous communities in exchange for nominal protection and Christian instruction. In the highlands of Peru, the Spanish adapted the Inca mita system, compelling indigenous workers to labor in the silver mines of Potosí, which by the late sixteenth century had become the largest source of silver in the world. The enormous quantities of silver extracted from Potosí and other mines flowed across the Atlantic to Spain, and much of it continued eastward through the Manila galleon trade to China, where demand for silver was insatiable. Spanish colonial society was organized around an elaborate racial hierarchy known as the casta system, which classified individuals according to their ancestry — peninsulares, criollos, mestizos, mulatos, and indigenous peoples each occupied distinct social positions. This system reinforced Spanish dominance while creating a complex, stratified society unlike anything that had existed before the conquest."
      },
      {
        id: "set3",
        setNum: 3,
        title: "Set 3 — The Meiji Restoration & Japanese Modernization (c. 1750-1900)",
        passage: "In 1853, Commodore Matthew Perry of the United States Navy arrived in Edo Bay with a squadron of warships, demanding that Japan open its ports to American trade. The resulting unequal treaties exposed the weakness of the Tokugawa shogunate and contributed to its overthrow in 1868. The new Meiji government embarked on a sweeping program of modernization, summarized by the slogan 'rich country, strong army.' The Iwakura Mission of 1871-1873 sent senior officials to Europe and the United States to study Western institutions, technology, and military organization. Japan rapidly industrialized, building railroads, telegraph lines, and modern factories — many initially staffed by foreign advisors. A new conscript army replaced the samurai warrior class, and a constitution modeled partly on Prussia's was promulgated in 1889. Japan's victory in the Sino-Japanese War of 1894-1895, which resulted in the acquisition of Taiwan and recognition of Japanese influence in Korea, announced the emergence of a new imperial power in East Asia and challenged the assumption that modernization was an exclusively Western achievement."
      },
      {
        id: "set4",
        setNum: 4,
        title: "Set 4 — World War I & Its Global Consequences (c. 1900-present)",
        passage: "World War I was the first truly global industrialized conflict, mobilizing the resources and populations of empires spanning every continent. The concept of 'total war' blurred the distinction between soldiers and civilians, as governments directed entire economies toward the war effort, rationed food, conscripted labor, and deployed propaganda on an unprecedented scale. The collapse of the Ottoman Empire after the war led to the creation of the League of Nations mandate system, through which Britain and France assumed control of former Ottoman territories in the Middle East — including Iraq, Syria, Lebanon, and Palestine — under the guise of preparing them for eventual self-governance. Colonial soldiers from Africa, South Asia, and the Caribbean served in large numbers on European battlefields; over one million Indian troops fought for the British Empire, and France recruited hundreds of thousands of soldiers from West and North Africa. These soldiers returned home with heightened expectations of political rights and self-determination, expectations that colonial powers were largely unwilling to fulfill, thereby planting seeds for future independence movements."
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — Globalization & Its Discontents (c. 1900-present)",
        passage: "The late twentieth and early twenty-first centuries witnessed an acceleration of globalization driven by international trade agreements, advances in communication technology, and the integration of markets across national boundaries. The establishment of the World Trade Organization (WTO) in 1995 created a framework for reducing tariffs and resolving trade disputes, promoting the free flow of goods and capital across borders. Critics of globalization, however, argued that it primarily benefited wealthy nations and multinational corporations at the expense of workers and communities in the developing world. Cultural homogenization — the spread of Western consumer brands, entertainment, and English as a global language — provoked backlash from those who feared the erosion of local traditions and identities. Environmental challenges, including climate change, deforestation, and pollution, increasingly transcended national borders, demanding coordinated international responses. The digital revolution, powered by the internet and mobile telecommunications, connected billions of people but also created new forms of inequality between those with access to technology and those without."
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: Indian Ocean Trade & Swahili Coast (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "The discovery of Chinese porcelain fragments at Swahili coastal sites most directly supports which of the following claims about the Indian Ocean trade network?",
        choices: [
          "A", "Chinese merchants established permanent colonies along the East African coast",
          "B", "Long-distance maritime trade connected East Africa to markets in East and Southeast Asia",
          "C", "China exercised direct political control over the Swahili city-states",
          "D", "East African merchants traveled regularly to Chinese ports to purchase goods"
        ],
        answer: "B"
      },
      {
        num: 2,
        set: 1,
        stem: "The development of Swahili as a lingua franca along the East African coast is best understood as an example of which of the following historical processes?",
        choices: [
          "A", "The forced imposition of a colonial language on conquered peoples",
          "B", "Cultural syncretism resulting from sustained cross-cultural contact through trade",
          "C", "The deliberate creation of an artificial language by merchant guilds",
          "D", "The replacement of African languages by Arabic following military conquest"
        ],
        answer: "B"
      },
      {
        num: 3,
        set: 1,
        stem: "The conversion of Swahili rulers to Islam, as described in the passage, most directly served which of the following purposes?",
        choices: [
          "A", "It enabled Swahili rulers to participate more fully in the commercial networks of the Islamic world",
          "B", "It reflected the military conquest of East Africa by Arab armies",
          "C", "It eliminated all indigenous African cultural practices from the Swahili coast",
          "D", "It established a unified political authority over all East African city-states"
        ],
        answer: "A"
      },
      {
        num: 4,
        set: 1,
        stem: "The seasonal monsoon wind patterns of the Indian Ocean most directly influenced which of the following?",
        choices: [
          "A", "The political centralization of South Asian empires",
          "B", "The timing and direction of maritime trade voyages across the ocean",
          "C", "The development of overland trade routes connecting Africa to China",
          "D", "The spread of Christianity throughout the Indian Ocean basin"
        ],
        answer: "B"
      },
      {
        num: 5,
        set: 1,
        stem: "Ibn Battuta's description of Kilwa as 'one of the most beautiful cities in the world' is most useful to historians as evidence of which of the following?",
        choices: [
          "A", "The military superiority of East African city-states over their neighbors",
          "B", "The wealth generated by Indian Ocean trade and its impact on urban development",
          "C", "The complete absence of poverty in premodern East African societies",
          "D", "The dominance of European architectural styles in Indian Ocean port cities"
        ],
        answer: "B"
      },
      {
        num: 6,
        set: 1,
        stem: "The trade connections described in the passage most directly parallel those of which of the following contemporary networks?",
        choices: [
          "A", "The trans-Saharan trade linking West Africa to the Mediterranean",
          "B", "The Atlantic triangular trade connecting Europe, Africa, and the Americas",
          "C", "The overland Silk Roads connecting China to the Byzantine Empire",
          "D", "The fur trade between French colonists and Native Americans"
        ],
        answer: "C"
      },
      {
        num: 7,
        set: 1,
        stem: "A historian studying the Swahili coast would most likely need to consider which of the following limitations when using Ibn Battuta's account as a source?",
        choices: [
          "A", "Ibn Battuta wrote from the perspective of a Muslim traveler and may have emphasized Islamic aspects of Swahili culture while downplaying indigenous African traditions",
          "B", "Ibn Battuta was a European Christian missionary with no understanding of Islamic culture",
          "C", "Ibn Battuta visited the Swahili coast centuries before the Indian Ocean trade network existed",
          "D", "Ibn Battuta's account was written in Chinese and has been poorly translated"
        ],
        answer: "A"
      },
      {
        num: 8,
        set: 1,
        stem: "The coexistence of Islam with indigenous African cultural practices on the Swahili coast is most similar to which of the following developments in other regions?",
        choices: [
          "A", "The adoption of Buddhism in Japan alongside existing Shinto traditions",
          "B", "The forced conversion of indigenous peoples to Christianity in the Spanish Americas",
          "C", "The complete replacement of Hinduism by Islam in the Delhi Sultanate",
          "D", "The prohibition of all non-Christian religions in medieval Europe"
        ],
        answer: "A"
      },
      {
        num: 9,
        set: 1,
        stem: "Which of the following developments most directly contributed to the decline of Swahili city-states' dominance in Indian Ocean trade after the period described in the passage?",
        choices: [
          "A", "The arrival of Portuguese naval forces in the Indian Ocean in the late fifteenth and early sixteenth centuries",
          "B", "The expansion of the Mongol Empire into East Africa",
          "C", "The collapse of the Chinese Song Dynasty and the end of Chinese maritime trade",
          "D", "The spread of the Black Death to the East African coast"
        ],
        answer: "A"
      },
      {
        num: 10,
        set: 1,
        stem: "The political organization of the Swahili coast as a series of independent city-states rather than a unified empire is most comparable to which of the following?",
        choices: [
          "A", "The centralized bureaucratic state of Ming Dynasty China",
          "B", "The independent city-states of Renaissance Italy",
          "C", "The vast territorial empire of the Mongols under Genghis Khan",
          "D", "The feudal monarchy of medieval France"
        ],
        answer: "B"
      },
      {
        num: 11,
        set: 1,
        stem: "The archaeological evidence of Chinese, Indian, and Persian goods found at Swahili sites most directly demonstrates which of the following about the Indian Ocean trade network?",
        choices: [
          "A", "Trade was controlled by a single dominant political power that regulated all commerce",
          "B", "The network facilitated the exchange of goods across vast distances involving multiple cultural regions",
          "C", "East African city-states manufactured porcelain and glass beads for export to Asia",
          "D", "Indian Ocean trade was limited to luxury goods and had no impact on ordinary people"
        ],
        answer: "B"
      },
      // SET 2 — Questions 12-22: Spanish Colonial Empire (c. 1450-1750)
      {
        num: 12,
        set: 2,
        stem: "The encomienda system described in the passage most directly served which of the following purposes for the Spanish colonial state?",
        choices: [
          "A", "Providing indigenous peoples with education and economic opportunity",
          "B", "Securing a labor force for Spanish colonists while maintaining the fiction of indigenous freedom",
          "C", "Encouraging voluntary migration of indigenous peoples to Spanish cities",
          "D", "Establishing diplomatic alliances between Spanish colonists and indigenous leaders"
        ],
        answer: "B"
      },
      {
        num: 13,
        set: 2,
        stem: "The flow of silver from Potosí through Spain to China via the Manila galleon trade most directly illustrates which of the following developments?",
        choices: [
          "A", "The emergence of the first truly global economy connecting the Americas, Europe, and Asia",
          "B", "China's military dominance over the Spanish Empire in the Pacific region",
          "C", "The decline of European interest in Asian luxury goods",
          "D", "The isolation of the Americas from global trade networks"
        ],
        answer: "A"
      },
      {
        num: 14,
        set: 2,
        stem: "The casta system described in the passage most closely served which of the following functions in Spanish colonial society?",
        choices: [
          "A", "Promoting social mobility and equality among all colonial subjects",
          "B", "Eliminating all cultural differences within the Spanish colonial population",
          "C", "Encouraging intermarriage between Spanish colonists and indigenous peoples",
          "D", "Reinforcing a hierarchical social order based on racial and ethnic categories"
        ],
        answer: "D"
      },
      {
        num: 15,
        set: 2,
        stem: "The Spanish adaptation of the Inca mita system for use in the silver mines of Potosí best illustrates which of the following patterns of colonial governance?",
        choices: [
          "A", "European colonizers frequently adapted existing indigenous institutions to serve colonial economic objectives",
          "B", "Indigenous labor systems were entirely abolished and replaced with European practices",
          "C", "The Spanish Empire relied exclusively on enslaved African labor in all its colonial enterprises",
          "D", "Colonial mining operations were conducted voluntarily by indigenous workers seeking wages"
        ],
        answer: "A"
      },
      {
        num: 16,
        set: 2,
        stem: "The massive quantities of silver extracted from Potosí most directly contributed to which of the following economic developments in Europe?",
        choices: [
          "A", "A prolonged period of deflation that reduced the cost of living for ordinary Europeans",
          "B", "The complete abandonment of gold as a medium of exchange",
          "C", "The decline of European trade with Asia due to an oversupply of precious metals",
          "D", "A significant price revolution characterized by inflation across the European economy"
        ],
        answer: "D"
      },
      {
        num: 17,
        set: 2,
        stem: "The distinction between peninsulares and criollos in the casta system most directly contributed to which of the following later developments?",
        choices: [
          "A", "The abolition of slavery throughout the Spanish Americas in the sixteenth century",
          "B", "The voluntary return of all Spanish colonists to the Iberian Peninsula",
          "C", "The peaceful unification of all Spanish colonial territories into a single nation-state",
          "D", "Criollo resentment of peninsular privilege, which fueled nineteenth-century independence movements"
        ],
        answer: "D"
      },
      {
        num: 18,
        set: 2,
        stem: "The Manila galleon trade described in the passage is most significant because it demonstrates which of the following?",
        choices: [
          "A", "Spain's ability to connect its American colonies directly to Asian markets across the Pacific Ocean",
          "B", "The Philippines' independence from European colonial control during this period",
          "C", "China's refusal to participate in international trade during the early modern period",
          "D", "The decline of silver as a valuable commodity in the global economy"
        ],
        answer: "A"
      },
      {
        num: 19,
        set: 2,
        stem: "The labor conditions in the silver mines of Potosí as described in the passage would most likely be criticized by which of the following contemporaries?",
        choices: [
          "A", "Zheng He, who commanded Chinese maritime expeditions in the Indian Ocean",
          "B", "Niccolò Machiavelli, who argued that rulers should prioritize state power above moral concerns",
          "C", "Martin Luther, who focused his reform efforts on Church theology rather than colonial policy",
          "D", "Bartolomé de las Casas, who advocated for the rights of indigenous peoples"
        ],
        answer: "D"
      },
      {
        num: 20,
        set: 2,
        stem: "The demographic consequences of the Spanish colonial system in the Americas were most directly comparable to which of the following?",
        choices: [
          "A", "The population growth experienced in China during the Song Dynasty",
          "B", "The urban growth driven by the Industrial Revolution in nineteenth-century England",
          "C", "The expansion of agricultural settlement in medieval Eastern Europe",
          "D", "The devastation caused by the Black Death in fourteenth-century Europe"
        ],
        answer: "D"
      },
      {
        num: 21,
        set: 2,
        stem: "Which of the following best describes a key difference between the Spanish encomienda system and the later Atlantic plantation system?",
        choices: [
          "A", "The plantation system was a voluntary arrangement, while the encomienda was based on military conquest",
          "B", "The plantation system was exclusively located in Asia, while the encomienda was limited to Africa",
          "C", "The encomienda system produced manufactured goods, while plantations focused on mineral extraction",
          "D", "The encomienda system compelled indigenous labor through legal obligation, while plantation systems relied primarily on enslaved African labor"
        ],
        answer: "D"
      },
      {
        num: 22,
        set: 2,
        stem: "A historian analyzing the casta system would most likely conclude that it served primarily to accomplish which of the following?",
        choices: [
          "A", "Ensure equal representation of all ethnic groups in colonial government",
          "B", "Encourage the rapid assimilation of all colonial subjects into Spanish culture",
          "C", "Promote scientific understanding of human biological diversity",
          "D", "Maintain Spanish colonial power by institutionalizing racial hierarchies that privileged European ancestry"
        ],
        answer: "D"
      },
      // SET 3 — Questions 23-33: Meiji Restoration (c. 1750-1900)
      {
        num: 23,
        set: 3,
        stem: "Commodore Perry's arrival in Japan in 1853 most directly led to which of the following?",
        choices: [
          "A", "Japan's immediate colonization by the United States",
          "B", "The formation of a military alliance between Japan and China against Western powers",
          "C", "A period of Japanese isolation even more restrictive than that under the Tokugawa",
          "D", "The signing of unequal treaties that opened Japanese ports to foreign trade"
        ],
        answer: "D"
      },
      {
        num: 24,
        set: 3,
        stem: "The Meiji government's slogan 'rich country, strong army' most directly reflected which of the following goals?",
        choices: [
          "A", "Restoring Japan to its pre-Tokugawa feudal political structure",
          "B", "Abandoning all aspects of Japanese culture in favor of Western civilization",
          "C", "Establishing a communist economic system modeled on Marxist principles",
          "D", "Building national wealth and military power to resist Western imperialism"
        ],
        answer: "D"
      },
      {
        num: 25,
        set: 3,
        stem: "The Iwakura Mission of 1871-1873 is most significant because it demonstrates which of the following aspects of Meiji modernization?",
        choices: [
          "A", "Japan's desire to export its own cultural and political institutions to the West",
          "B", "Japan's attempt to form a military alliance with European colonial powers",
          "C", "The Meiji government's rejection of all Western influence on Japanese society",
          "D", "Japan's deliberate and systematic study of Western institutions as models for reform"
        ],
        answer: "D"
      },
      {
        num: 26,
        set: 3,
        stem: "The replacement of the samurai warrior class with a modern conscript army most directly reflected which of the following broader patterns of nineteenth-century state-building?",
        choices: [
          "A", "The restoration of aristocratic military privileges in response to popular demands",
          "B", "The global decline of military conflict as nations adopted pacifist foreign policies",
          "C", "The increasing reliance on mercenary forces by modernizing states",
          "D", "The trend toward professional, centralized national armies replacing feudal military arrangements"
        ],
        answer: "D"
      },
      {
        num: 27,
        set: 3,
        stem: "Japan's adoption of a constitution modeled partly on Prussia's in 1889 most directly served which of the following purposes?",
        choices: [
          "A", "Establishing a fully democratic republic with universal suffrage",
          "B", "Rejecting Western political models in favor of traditional Confucian governance",
          "C", "Abolishing the emperor's role and transferring all power to an elected parliament",
          "D", "Creating a constitutional framework that modernized governance while preserving imperial authority"
        ],
        answer: "D"
      },
      {
        num: 28,
        set: 3,
        stem: "Japan's victory in the Sino-Japanese War of 1894-1895 was globally significant primarily because it demonstrated which of the following?",
        choices: [
          "A", "That traditional military tactics were superior to modern industrial warfare",
          "B", "That China had become the dominant military power in East Asia",
          "C", "That Western nations were willing to support Asian countries against each other",
          "D", "That non-Western nations could successfully adopt Western-style industrialization and military modernization"
        ],
        answer: "D"
      },
      {
        num: 29,
        set: 3,
        stem: "The Meiji government's use of foreign advisors in building modern factories is most comparable to which of the following developments in other states?",
        choices: [
          "A", "The Ottoman Empire's reliance on the devshirme system to recruit government officials",
          "B", "The Qing Dynasty's complete rejection of all foreign technology and expertise",
          "C", "Peter the Great's hiring of Western European experts to modernize Russia's military and industry",
          "D", "The Mughal Empire's use of Hindu administrators in its bureaucratic system"
        ],
        answer: "C"
      },
      {
        num: 30,
        set: 3,
        stem: "Which of the following best explains why the Tokugawa shogunate was unable to resist Perry's demands in 1853?",
        choices: [
          "A", "Japan had been weakened by decades of civil war immediately prior to Perry's arrival",
          "B", "The Japanese emperor had already secretly agreed to open the country to American trade",
          "C", "Japan's military technology had fallen behind that of Western industrialized nations during its period of relative isolation",
          "D", "Perry offered Japan advanced weapons technology in exchange for trade concessions"
        ],
        answer: "C"
      },
      {
        num: 31,
        set: 3,
        stem: "The Meiji Restoration differed most significantly from China's Self-Strengthening Movement (1861-1895) in which of the following ways?",
        choices: [
          "A", "Japan rejected all Western influence while China embraced it enthusiastically",
          "B", "China modernized more rapidly and successfully than Japan during this period",
          "C", "Japan pursued comprehensive institutional reforms while China attempted to adopt Western technology without fundamentally changing its political system",
          "D", "China's reforms were led by a revolutionary new government while Japan's were directed by the existing ruling class"
        ],
        answer: "C"
      },
      {
        num: 32,
        set: 3,
        stem: "The acquisition of Taiwan following the Sino-Japanese War marked the beginning of which of the following developments in Japanese history?",
        choices: [
          "A", "The peaceful unification of all East Asian nations under Japanese leadership",
          "B", "Japan's withdrawal from international affairs and return to isolationism",
          "C", "Japan's transformation from a target of imperialism to an imperial power in its own right",
          "D", "The decline of Japanese military power and industrial capacity"
        ],
        answer: "C"
      },
      {
        num: 33,
        set: 3,
        stem: "A historian would most likely use the Meiji Restoration as evidence to support which of the following arguments?",
        choices: [
          "A", "Industrialization was only possible in societies with a Western cultural heritage",
          "B", "Democratic governance was a necessary precondition for successful industrialization",
          "C", "Centralized state direction and selective borrowing from foreign models could enable rapid modernization",
          "D", "Modernization inevitably led to the complete abandonment of traditional cultural values"
        ],
        answer: "C"
      },
      // SET 4 — Questions 34-44: World War I & Global Consequences (c. 1900-present)
      {
        num: 34,
        set: 4,
        stem: "The concept of 'total war' as described in the passage most directly refers to which of the following?",
        choices: [
          "A", "Warfare limited exclusively to professional armies fighting on defined battlefields",
          "B", "The use of nuclear weapons to achieve decisive military victory",
          "C", "The mobilization of entire societies — including civilian populations, economies, and industrial resources — for the war effort",
          "D", "Diplomatic negotiations that replaced armed conflict between major powers"
        ],
        answer: "C"
      },
      {
        num: 35,
        set: 4,
        stem: "The League of Nations mandate system described in the passage most directly reflected which of the following contradictions in the post-World War I settlement?",
        choices: [
          "A", "The mandate system was designed to expand the Ottoman Empire rather than dismantle it",
          "B", "The League of Nations granted immediate independence to all former colonial territories",
          "C", "The promise of self-determination was applied selectively, as European powers maintained control over former Ottoman territories",
          "D", "European powers voluntarily withdrew from all Middle Eastern territories after the war"
        ],
        answer: "C"
      },
      {
        num: 36,
        set: 4,
        stem: "The service of over one million Indian troops in the British armed forces during World War I most directly contributed to which of the following developments?",
        choices: [
          "A", "The immediate granting of full independence to India in 1918",
          "B", "The strengthening of British colonial control over India through military gratitude",
          "C", "Growing demands for political rights and self-governance among Indian colonial subjects",
          "D", "The decline of Indian nationalist movements as colonial subjects embraced British identity"
        ],
        answer: "C"
      },
      {
        num: 37,
        set: 4,
        stem: "The collapse of the Ottoman Empire after World War I most directly led to which of the following geopolitical developments?",
        choices: [
          "A", "The unification of all Middle Eastern peoples into a single Arab state",
          "B", "The restoration of Byzantine authority over former Ottoman territories",
          "C", "The creation of new nation-states and European-controlled mandates in the Middle East",
          "D", "The voluntary adoption of European-style democratic governance throughout the region"
        ],
        answer: "C"
      },
      {
        num: 38,
        set: 4,
        stem: "The use of propaganda on an 'unprecedented scale' during World War I as described in the passage most directly demonstrates which of the following?",
        choices: [
          "A", "The declining importance of public opinion in modern warfare",
          "B", "The absence of censorship in wartime democracies",
          "C", "Governments' recognition that sustaining civilian morale was essential to the total war effort",
          "D", "The success of pacifist movements in ending the war quickly"
        ],
        answer: "C"
      },
      {
        num: 39,
        set: 4,
        stem: "France's recruitment of hundreds of thousands of soldiers from West and North Africa during World War I is most directly comparable to which of the following?",
        choices: [
          "A", "The Ottoman devshirme system of recruiting Christian boys for military service",
          "B", "The use of mercenary forces by Italian city-states during the Renaissance",
          "C", "Britain's use of Indian sepoys in colonial military campaigns during the eighteenth and nineteenth centuries",
          "D", "The Mongol practice of incorporating conquered peoples into their armies"
        ],
        answer: "C"
      },
      {
        num: 40,
        set: 4,
        stem: "The passage states that colonial soldiers 'returned home with heightened expectations of political rights.' This development is best explained by which of the following?",
        choices: [
          "A", "Colonial governments had promised full citizenship to all soldiers who served in the war",
          "B", "Exposure to European ideas of nationalism and self-determination, combined with resentment over unequal treatment, radicalized colonial soldiers",
          "C", "Colonial soldiers had gained control of advanced military technology that they could use to overthrow colonial rule",
          "D", "European colonial powers voluntarily agreed to decolonization as a reward for wartime service"
        ],
        answer: "B"
      },
      {
        num: 41,
        set: 4,
        stem: "The transformation of warfare described in the passage — including the use of industrial technology, conscription, and economic mobilization — most directly resulted from which of the following earlier developments?",
        choices: [
          "A", "The spread of Enlightenment ideas about the moral limitations of warfare",
          "B", "The decline of European monarchies and the rise of pacifist governments",
          "C", "The Industrial Revolution's creation of new weapons technology and mass production capabilities",
          "D", "The global decline of military spending in the decades before 1914"
        ],
        answer: "C"
      },
      {
        num: 42,
        set: 4,
        stem: "The mandate system's stated goal of 'preparing' former Ottoman territories for self-governance is most directly an example of which of the following?",
        choices: [
          "A", "Genuine commitment to rapid decolonization by European imperial powers",
          "B", "The use of civilizing mission rhetoric to justify continued European imperial control",
          "C", "The successful application of Wilsonian self-determination principles in all cases",
          "D", "The voluntary request by Middle Eastern peoples for European guidance"
        ],
        answer: "B"
      },
      {
        num: 43,
        set: 4,
        stem: "Which of the following was a direct long-term consequence of the post-World War I settlement in the Middle East as described in the passage?",
        choices: [
          "A", "The establishment of stable, democratic nation-states throughout the region",
          "B", "Ongoing political instability and conflict rooted in borders drawn without regard for ethnic and religious divisions",
          "C", "The permanent exclusion of the Middle East from global economic networks",
          "D", "The peaceful resolution of all territorial disputes through League of Nations arbitration"
        ],
        answer: "B"
      },
      {
        num: 44,
        set: 4,
        stem: "The experience of World War I most directly challenged which of the following prevailing beliefs of the pre-war era?",
        choices: [
          "A", "The belief that technological progress and European civilization would inevitably lead to peace and human advancement",
          "B", "The belief that colonial empires were economically unprofitable and should be abandoned",
          "C", "The belief that democratic governments were incapable of waging effective warfare",
          "D", "The belief that industrial production was irrelevant to military power"
        ],
        answer: "A"
      },
      // SET 5 — Questions 45-55: Globalization & Its Discontents (c. 1900-present)
      {
        num: 45,
        set: 5,
        stem: "The establishment of the World Trade Organization in 1995 most directly represented which of the following trends in the late twentieth century?",
        choices: [
          "A", "The increasing willingness of nations to reduce trade barriers and integrate into a global economy",
          "B", "The rejection of free trade in favor of protectionist economic policies",
          "C", "The decline of international institutions in the post-Cold War world",
          "D", "The dominance of communist economic models in global trade"
        ],
        answer: "A"
      },
      {
        num: 46,
        set: 5,
        stem: "Critics of globalization as described in the passage would most likely agree with which of the following statements?",
        choices: [
          "A", "Free trade agreements have equally benefited all nations and social classes",
          "B", "The benefits of globalization have been unevenly distributed, often favoring wealthy nations and corporations over workers in developing countries",
          "C", "Globalization has had no measurable impact on economic inequality",
          "D", "International trade should be completely eliminated to protect local economies"
        ],
        answer: "B"
      },
      {
        num: 47,
        set: 5,
        stem: "The concern over cultural homogenization described in the passage most directly parallels which of the following historical patterns?",
        choices: [
          "A", "The spread of Hellenistic culture across the eastern Mediterranean following Alexander's conquests",
          "B", "The development of completely isolated civilizations with no cross-cultural contact",
          "C", "The decline of all forms of cultural exchange after 1900",
          "D", "The triumph of local cultures over all external influences throughout modern history"
        ],
        answer: "A"
      },
      {
        num: 48,
        set: 5,
        stem: "The environmental challenges described in the passage — including climate change and deforestation — most directly illustrate which of the following characteristics of globalization?",
        choices: [
          "A", "Environmental problems are confined to individual nations and require only local solutions",
          "B", "Global economic integration has created transnational environmental problems that require international cooperation to address",
          "C", "Industrialization has had no significant impact on the global environment",
          "D", "Environmental problems have been completely solved through technological innovation"
        ],
        answer: "B"
      },
      {
        num: 49,
        set: 5,
        stem: "The 'digital divide' referenced in the passage — the inequality between those with and without access to technology — is most directly comparable to which of the following earlier historical phenomena?",
        choices: [
          "A", "The gap between industrialized and non-industrialized nations during the nineteenth century",
          "B", "The religious divisions between Catholics and Protestants during the Reformation",
          "C", "The political rivalry between Athens and Sparta in ancient Greece",
          "D", "The linguistic differences between Romance and Germanic languages in medieval Europe"
        ],
        answer: "A"
      },
      {
        num: 50,
        set: 5,
        stem: "The backlash against the spread of Western consumer culture described in the passage is best understood as an example of which of the following?",
        choices: [
          "A", "Resistance movements that seek to preserve local cultural identities against perceived foreign domination",
          "B", "Universal acceptance of Western cultural values across all societies",
          "C", "The complete disappearance of non-Western cultural traditions by the twenty-first century",
          "D", "The deliberate destruction of Western cultural products by national governments"
        ],
        answer: "A"
      },
      {
        num: 51,
        set: 5,
        stem: "The role of the internet and mobile telecommunications in connecting billions of people, as described in the passage, most directly contributed to which of the following?",
        choices: [
          "A", "The elimination of all cultural and linguistic barriers between peoples",
          "B", "New forms of political activism, social movements, and the rapid dissemination of information across borders",
          "C", "The decline of all forms of traditional media and communication",
          "D", "Universal access to technology in every region of the world"
        ],
        answer: "B"
      },
      {
        num: 52,
        set: 5,
        stem: "A historian would most likely argue that the globalization described in the passage differs from earlier forms of global exchange primarily because of which of the following?",
        choices: [
          "A", "The speed and scale of economic integration, enabled by modern transportation and communication technology",
          "B", "The complete absence of international trade before the twentieth century",
          "C", "The fact that earlier trade networks had no cultural or environmental consequences",
          "D", "The dominance of African and Asian economies in the modern global system"
        ],
        answer: "A"
      },
      {
        num: 53,
        set: 5,
        stem: "The WTO's framework for reducing tariffs and resolving trade disputes most directly reflects the influence of which of the following economic ideologies?",
        choices: [
          "A", "Mercantilism, which emphasized the accumulation of gold and trade surpluses",
          "B", "Marxism, which advocated for state ownership of the means of production",
          "C", "Free-market liberalism, which argues that reducing trade barriers promotes economic growth",
          "D", "Autarky, which promotes national self-sufficiency and economic isolation"
        ],
        answer: "C"
      },
      {
        num: 54,
        set: 5,
        stem: "The environmental consequences of globalization described in the passage are most directly linked to which of the following economic developments?",
        choices: [
          "A", "The decline of industrial production worldwide since 1990",
          "B", "The expansion of industrial manufacturing, resource extraction, and fossil fuel consumption driven by global economic growth",
          "C", "The complete abandonment of agriculture in favor of service-sector economies",
          "D", "The universal adoption of sustainable energy sources by all nations"
        ],
        answer: "B"
      },
      {
        num: 55,
        set: 5,
        stem: "Which of the following best describes the central tension of globalization as presented in the passage?",
        choices: [
          "A", "Globalization has produced significant economic growth and connectivity but has also generated inequality, cultural disruption, and environmental challenges",
          "B", "Globalization has been universally beneficial and faces no meaningful opposition",
          "C", "Globalization has completely failed to produce any economic or social benefits",
          "D", "Globalization is a phenomenon limited exclusively to Western Europe and North America"
        ],
        answer: "A"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, Marco Polo on Hangzhou
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Chinese Cities Under Mongol Rule",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source 1",
            title: "Medieval illustration of Hangzhou (Kinsai) under the Yuan Dynasty, c. 1290",
            description: "A European manuscript illustration imagining the great Chinese city of Hangzhou as described by Marco Polo.",
            figureId: "sim3-saq1-marco-polo-hangzhou",
            text: ""
          },
          {
            label: "Source 2",
            title: "Marco Polo, The Travels of Marco Polo (c. 1300)",
            description: "Marco Polo was a Venetian merchant who traveled to China and served in the court of the Mongol ruler Kublai Khan. His account, dictated after his return to Europe, describes the city of Hangzhou (which he called Kinsai) under Yuan Dynasty rule.",
            text: "The city of Kinsai is without doubt the finest and most splendid city in the world. It is so great that it has one hundred miles of compass. It has twelve thousand stone bridges, and beneath the greater part of them ships of considerable size can pass. The streets are paved with stone and brick. The inhabitants are peaceful and honest, accustomed to comforts and luxuries. The number of merchants and the amount of goods that pass through this city are so enormous that no one could form a just estimate. The Great Khan derives an immense revenue from the duties levied on trade. There are ten principal markets, held three days a week, and each market is frequented by forty to fifty thousand persons."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way the source illustrates the economic prosperity of Chinese cities during the period of Mongol rule." },
          { letter: "B", prompt: "Explain ONE way that Mongol rule facilitated long-distance trade across Eurasia in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE limitation of using Marco Polo's account as a source for understanding Chinese society under the Yuan Dynasty." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an aspect of economic prosperity such as the large markets with tens of thousands of participants, the enormous volume of trade goods, the extensive infrastructure of stone bridges, or the immense revenue derived from trade duties." },
          { row: "B", category: "Part B", points: 1, description: "Explains a way Mongol rule facilitated trade such as the Pax Mongolica providing security along Silk Road routes, the yam postal relay system enabling communication, the use of paper money facilitating commerce, or Mongol policies of religious tolerance encouraging merchant travel." },
          { row: "C", category: "Part C", points: 1, description: "Explains a limitation such as Marco Polo's possible exaggeration of numbers to impress European audiences, his outsider perspective limiting his understanding of Chinese customs, the account being dictated from memory years after his visit, or scholarly debate about whether Polo actually visited all the places he described." }
        ]
      },
      // SAQ 2 — Secondary source, Green Revolution
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — Effects of the Green Revolution",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Vandana Shiva, The Violence of the Green Revolution (1991)",
            description: "Vandana Shiva is an Indian scholar and environmental activist. This excerpt is from her study of the Green Revolution's impact on agriculture in the developing world.",
            text: "The Green Revolution was presented as a technological solution to hunger, introducing high-yield crop varieties, chemical fertilizers, and irrigation systems to developing countries in Asia, Latin America, and Africa. Wheat and rice yields in countries such as India and Mexico increased dramatically during the 1960s and 1970s. However, the new agricultural practices required expensive inputs — seeds, fertilizers, and pesticides — that wealthier farmers could afford but poorer ones could not. The result was a widening gap between large landowners, who prospered, and small farmers, who were often driven into debt and forced to sell their land. Meanwhile, the reliance on monoculture crops and chemical inputs degraded soils and reduced biodiversity, creating new forms of ecological vulnerability."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way the Green Revolution increased agricultural production in developing countries." },
          { letter: "B", prompt: "Explain ONE way that the Green Revolution contributed to economic inequality in rural communities." },
          { letter: "C", prompt: "Explain ONE environmental consequence of the agricultural practices introduced by the Green Revolution." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a way production increased such as the introduction of high-yield crop varieties that dramatically increased wheat and rice output, the use of chemical fertilizers boosting soil productivity, or expanded irrigation systems enabling year-round cultivation." },
          { row: "B", category: "Part B", points: 1, description: "Explains how inequality increased such as wealthy farmers being able to afford expensive inputs (seeds, fertilizers, pesticides) while poor farmers could not, leading to debt, land loss, and consolidation of agricultural land in fewer hands." },
          { row: "C", category: "Part C", points: 1, description: "Explains an environmental consequence such as soil degradation from chemical fertilizer overuse, loss of biodiversity from monoculture farming replacing diverse traditional crops, water depletion from intensive irrigation, or chemical runoff polluting waterways." }
        ]
      },
      // SAQ 3 — No stimulus, Religion and political authority (c. 1200-1450)
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Religion and Political Authority (c. 1200-1450)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that rulers in the period c. 1200-1450 used religion to legitimize their political authority." },
          { letter: "B", prompt: "Explain ONE way that religious institutions challenged or limited the authority of political rulers in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE significant difference in how TWO specific states used religion to support political power in the period c. 1200-1450." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an example such as the Chinese emperor's claim to the Mandate of Heaven, European monarchs' assertion of divine right supported by the Catholic Church, Islamic rulers claiming the title of caliph or sultan as defenders of the faith, or Aztec rulers performing religious rituals to legitimize their authority." },
          { row: "B", category: "Part B", points: 1, description: "Explains a challenge such as the Catholic Church's power to excommunicate rulers (as with Emperor Henry IV), the ulama limiting the authority of Islamic rulers through interpretation of sharia law, or Buddhist monasteries accumulating political and economic influence that rivaled secular rulers." },
          { row: "C", category: "Part C", points: 1, description: "Explains a difference such as European rulers relying on papal endorsement while Chinese emperors claimed the Mandate of Heaven independently of religious institutions, or Islamic rulers integrating religious and political authority while medieval European kings shared power with the Church." }
        ]
      },
      // SAQ 4 — No stimulus, Total war and civilians (c. 1900-present)
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Total War and Civilian Populations (c. 1900-present)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that the concept of total war affected civilian populations during the twentieth century." },
          { letter: "B", prompt: "Explain ONE way that governments mobilized civilian populations for the war effort during either World War I or World War II." },
          { letter: "C", prompt: "Explain ONE long-term social or political consequence of the impact of total war on civilian populations." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an impact such as strategic bombing of cities (the Blitz, firebombing of Dresden or Tokyo, atomic bombings of Hiroshima and Nagasaki), forced displacement of populations, genocide and ethnic cleansing, or food rationing and shortages caused by wartime economic disruption." },
          { row: "B", category: "Part B", points: 1, description: "Explains a form of mobilization such as wartime industrial production by civilian workers (Rosie the Riveter), government propaganda campaigns to sustain morale, rationing systems for food and consumer goods, conscription of civilian labor, or women entering the workforce in unprecedented numbers." },
          { row: "C", category: "Part C", points: 1, description: "Explains a long-term consequence such as the creation of international humanitarian law (Geneva Conventions), the establishment of the United Nations to prevent future conflicts, expanded women's political rights following their wartime contributions, decolonization movements fueled by the hypocrisy of fighting for freedom abroad while denying it to colonial subjects, or the development of the welfare state in response to wartime social solidarity." }
        ]
      },
      // DBQ — European colonialism & economic transformation in South and Southeast Asia (c. 1750-1900)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which European colonialism transformed economic systems in South and Southeast Asia in the period c. 1750-1900.",
        documents: [
          {
            num: 1,
            source: "Lord Cornwallis, Permanent Settlement regulations for Bengal, India (1793)",
            text: "Whereas the revenues of Bengal have been in a declining state owing to the defective system of collection, it is hereby established that the zamindars shall be recognized as the proprietors of the soil, responsible for the payment of a fixed annual revenue to the East India Company. The amount of revenue assessed upon each estate shall remain permanently fixed and shall not be increased at any future period. The zamindars shall have the right to manage their estates, collect rents from the cultivators, and retain all surplus revenue above the fixed amount."
          },
          {
            num: 2,
            source: "Romesh Chunder Dutt, The Economic History of India Under Early British Rule (1902)",
            figureId: "sim3-dbq-doc3-indian-textile-workers",
            text: "India in the eighteenth century was a great manufacturing as well as a great agricultural country, and the products of the Indian loom supplied the markets of Asia and of Europe. It is a melancholy instance of the wrong done to India by the East India Company that the Manchester manufacturers sought to impose heavy duties on Indian textiles imported into Britain while insisting that British goods enter India duty-free. The result was the ruin of the Indian textile industry, the destruction of once-prosperous cities, and the conversion of India from a manufacturing to an agricultural nation dependent upon the export of raw materials."
          },
          {
            num: 3,
            source: "Adapted from records of the Dutch Cultivation System in Java, Indonesia (c. 1840)",
            text: "Under the Cultivation System, Javanese villages are required to set aside one-fifth of their agricultural land for the cultivation of export crops designated by the colonial government — principally coffee, sugar, and indigo. The produce is delivered to government warehouses at prices fixed by the Dutch authorities. In return, the villages are exempted from the land tax. The system has generated enormous profits for the Dutch colonial treasury, with net revenues from Java exceeding 30 million guilders annually, representing approximately one-third of the total revenue of the Kingdom of the Netherlands."
          },
          {
            num: 4,
            source: "Dadabhai Naoroji, Poverty and Un-British Rule in India (1901)",
            text: "A continuous flow of wealth — the drain of wealth — is being carried away from India to England without any material return. The value of Indian exports exceeds imports by many millions of pounds annually, but this surplus does not return to India in the form of investment or goods. It flows to England as payment for the salaries of British officials serving in India, interest on debts incurred for railways built primarily to serve British commercial interests, and profits of British-owned enterprises. This drain is the root cause of Indian poverty and famines."
          },
          {
            num: 5,
            source: "Sir Stamford Raffles, founder of Singapore, letter on the administration of Java (1817)",
            text: "The island of Java possesses a fertile soil and an industrious population, but under the Dutch system the native cultivator has been reduced to a mere instrument of production for the benefit of the colonial treasury. The compulsory cultivation of coffee and other export crops has diverted labor and land from the production of rice, the staple food of the population. The consequence has been periodic famines in a land of abundance. I am convinced that a system of free trade and private enterprise, with security of property for the native cultivator, would produce greater wealth for all parties than the present system of monopoly and compulsion."
          },
          {
            num: 6,
            source: "Adapted from a report of the British Indian Railway Commission (1871)",
            text: "The construction of railways in India has opened up the interior of the country to trade on a scale never before possible. Cotton, wheat, jute, and other raw materials can now be transported cheaply and quickly from inland districts to the port cities of Bombay, Calcutta, and Madras for export to British factories. The total mileage of railway track in India has increased from 838 miles in 1860 to 5,089 miles in 1871. Investment in Indian railways has been guaranteed a minimum return of 5 percent by the Government of India, thereby attracting substantial British capital."
          },
          {
            num: 7,
            source: "Syed Ahmed Khan, speech on British education in India (1886)",
            text: "I acknowledge that the British government has introduced improvements in India — roads, railways, canals, and the establishment of law and order. Yet these improvements have been made primarily to serve British commercial and administrative interests rather than for the benefit of the Indian people. The railways carry Indian raw materials to the ports for export but do little to develop Indian manufacturing. The education system produces clerks for the colonial administration but does not train engineers, scientists, or industrialists who might build an independent Indian economy."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — Comparative political systems
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, compare the political structures of TWO empires and evaluate the extent to which they used similar methods to maintain authority over diverse populations." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which absolute monarchies in TWO different states consolidated political power and limited challenges to their authority." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which industrialization changed political structures and the relationship between governments and their citizens in one or more states." }
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
  // SIMULATION 4: Practice Simulation 4
  // ========================================================================
  {
    id: "sim4",
    label: "Practice Simulation 4",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        figureId: "sim4-set1-mongol-empire-map",
        title: "Set 1 — The Mongol Empire & Pax Mongolica (c. 1200-1450)",
        passage: "The Mongol Empire, founded by Genghis Khan in 1206, grew to become the largest contiguous land empire in history, stretching from Korea to Eastern Europe. Mongol conquests were devastating — cities that resisted faced wholesale destruction — but the empire that emerged facilitated unprecedented levels of exchange across Eurasia. The Mongols established the yam system, a network of relay stations spaced roughly every 25 miles along major routes, providing fresh horses, food, and shelter for official messengers and merchants. A paiza, or passport tablet issued by the khan, guaranteed safe passage throughout the empire. Mongol rulers generally practiced religious tolerance, patronizing Buddhist temples, Christian churches, Islamic mosques, and Daoist shrines within their domains. The Franciscan friar William of Rubruck, visiting the Mongol capital of Karakorum in 1254, reported seeing houses of worship for multiple faiths standing side by side. This period of relative stability and connectivity, often called the Pax Mongolica, enabled the transfer of technologies such as gunpowder, printing, and the magnetic compass from East Asia to the Middle East and Europe. However, the same trade routes that carried silk and spices also carried the bacterium Yersinia pestis, which spread along Mongol caravan routes and contributed to the catastrophic Black Death pandemic that reached Europe in 1347."
      },
      {
        id: "set2",
        setNum: 2,
        title: "Set 2 — Ming Dynasty China & Maritime Expeditions (c. 1368-1644)",
        passage: "The Ming Dynasty, established in 1368 after the overthrow of the Mongol-led Yuan Dynasty, sought to restore Chinese cultural traditions and reassert imperial authority. The Hongwu Emperor reinstated the Confucian civil service examination system as the primary mechanism for selecting government officials, creating a meritocratic bureaucracy that would endure for centuries. Between 1405 and 1433, the Ming court sponsored seven massive maritime expeditions led by the Muslim eunuch admiral Zheng He. His treasure fleet — comprising hundreds of ships, some reportedly over 400 feet in length — sailed to Southeast Asia, India, the Persian Gulf, and the East African coast, projecting Chinese power and establishing tributary relationships. After Zheng He's final voyage, however, the Ming court abruptly curtailed maritime expeditions, citing their enormous expense and the persistent threat of Mongol incursions along the northern frontier, which demanded resources for the reconstruction and extension of the Great Wall. The Ming economy became increasingly dependent on silver, particularly after the Single Whip Reform of 1581 consolidated multiple tax obligations into a single payment in silver. This demand drew vast quantities of silver from Spanish colonial mines in the Americas via the Manila galleon trade, integrating China into an emerging global economy even as its government pursued policies of relative maritime withdrawal."
      },
      {
        id: "set3",
        setNum: 3,
        title: "Set 3 — Latin American Colonial Societies (c. 1450-1750)",
        passage: "The colonial societies that emerged in Latin America after the Spanish and Portuguese conquests were among the most complex and stratified in the early modern world. The encomienda system, which granted colonists authority over indigenous communities in exchange for their supposed Christianization, gave way in many regions to the hacienda, a large landed estate that bound indigenous and mixed-race workers through debt peonage. The casta system classified inhabitants according to an elaborate hierarchy of racial ancestry — peninsulares (Iberian-born Spaniards) occupied the highest social tier, followed by criollos (American-born Europeans), mestizos (mixed European-indigenous), mulatos (mixed European-African), and indigenous and African-descended peoples at the bottom. In the highlands of Upper Peru, the silver mines of Potosí became the engine of the colonial economy; at its peak in the early seventeenth century, Potosí was one of the largest cities in the world, its population swollen by indigenous mita laborers drafted from communities hundreds of miles away. Jesuit missions, known as reducciones, gathered indigenous populations into organized settlements where they received religious instruction and were partially shielded from the worst abuses of the encomienda and mita systems, though the missions also served as instruments of cultural transformation that disrupted indigenous ways of life."
      },
      {
        id: "set4",
        setNum: 4,
        title: "Set 4 — Nationalist Movements & Independence in Asia and Africa (c. 1900-present)",
        passage: "The twentieth century witnessed the dismantling of European colonial empires in Asia and Africa, driven by nationalist movements that drew on diverse ideological traditions. In India, the Indian National Congress, founded in 1885, evolved from a moderate reform organization into a mass movement demanding complete independence under the leadership of Mohandas Gandhi, whose strategy of nonviolent civil disobedience mobilized millions of ordinary Indians against British rule. In francophone Africa and the Caribbean, the Negritude movement, articulated by intellectuals such as Aimé Césaire and Léopold Sédar Senghor, celebrated African cultural identity and challenged the racist assumptions underlying colonial rule. Pan-Africanism, championed by figures including W.E.B. Du Bois and Kwame Nkrumah, envisioned a unified continent free from foreign domination. The Bandung Conference of 1955, attended by representatives of 29 Asian and African nations, declared solidarity among newly independent and colonized peoples and rejected alignment with either Cold War superpower bloc. Despite these shared aspirations, the paths to independence varied enormously: some transitions were negotiated peacefully, while others — such as Algeria's war against France (1954-1962) and Kenya's Mau Mau uprising — involved prolonged and violent struggle."
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — The Post-Cold War World & Global Challenges (c. 1990-present)",
        passage: "The collapse of the Soviet Union in 1991 ended the bipolar Cold War order and ushered in an era of rapid transformation. The European Union expanded from 12 members in 1992 to 28 by 2013, absorbing many former communist states and creating the world's largest single market. China's economic reforms, initiated under Deng Xiaoping in 1978 and accelerating after 1990, transformed the country into the world's second-largest economy and largest manufacturing hub, lifting hundreds of millions of people out of poverty while maintaining single-party Communist rule. The September 11, 2001, terrorist attacks on the United States by al-Qaeda inaugurated a global 'War on Terror' that reshaped international security, led to military interventions in Afghanistan and Iraq, and prompted debates about civil liberties, surveillance, and the relationship between Islam and the West. Climate change emerged as perhaps the defining challenge of the era, with rising global temperatures linked to extreme weather events, rising sea levels, and threats to food security — the 2015 Paris Agreement represented an effort by nearly 200 nations to coordinate action, though implementation remained uneven. The digital revolution, driven by the internet, smartphones, and social media, transformed economies, political movements, and daily life worldwide, enabling everything from the Arab Spring protests to the expansion of e-commerce, while also generating concerns about misinformation, privacy, and digital inequality."
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: Mongol Empire & Pax Mongolica (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "The Mongol yam system of relay stations most directly contributed to which of the following developments during the period of Mongol rule?",
        choices: [
          "A", "The spread of democratic governance across Central Asia",
          "B", "The decline of overland trade in favor of maritime routes",
          "C", "The complete replacement of local languages with Mongolian throughout the empire",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 2,
        set: 1,
        stem: "The passage's description of Mongol religious tolerance is best understood in the context of which of the following Mongol imperial strategies?",
        choices: [
          "A", "Promoting a single state religion to unify diverse populations",
          "B", "Preventing subject peoples from practicing any form of organized religion",
          "C", "Accommodating diverse populations to reduce resistance and facilitate governance of a vast empire",
          "D", "Adopting Christianity as the official religion to build alliances with European kingdoms"
        ],
        answer: "C"
      },
      {
        num: 3,
        set: 1,
        stem: "The spread of the Black Death along Mongol trade routes most directly illustrates which of the following consequences of increased Eurasian connectivity?",
        choices: [
          "A", "The deliberate use of biological warfare by Mongol armies against European populations",
          "B", "The development of effective quarantine systems that prevented further disease transmission",
          "C", "The complete collapse of all trade between Europe and Asia after the pandemic",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 4,
        set: 1,
        stem: "Which of the following best explains a significant difference between the Mongol Empire and the earlier Roman Empire in their approaches to governing conquered peoples?",
        choices: [
          "A", "The Roman Empire practiced religious tolerance while the Mongols imposed a single religion on all subjects",
          "B", "The Mongols developed a sophisticated written legal code while Rome relied on oral traditions",
          "C", "The Roman Empire was entirely land-based while the Mongol Empire was a maritime power",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 5,
        set: 1,
        stem: "The paiza passport system described in the passage served a function most similar to which of the following in other historical contexts?",
        choices: [
          "A", "Letters of marque issued by European governments to authorize privateering",
          "B", "The tribute payment systems of the Aztec Empire",
          "C", "Safe-conduct passes and merchant privileges granted by the Ottoman Empire to foreign traders",
          "D", "The indulgences sold by the Catholic Church during the late medieval period"
        ],
        answer: "C"
      },
      {
        num: 6,
        set: 1,
        stem: "The transfer of technologies such as gunpowder and printing from East Asia westward during the Pax Mongolica most directly challenged which of the following assumptions?",
        choices: [
          "A", "That technological innovation originated exclusively in Western Europe",
          "B", "That the Mongols were incapable of appreciating or transmitting cultural achievements",
          "C", "That maritime trade was the only effective means of transferring technology between civilizations",
          "D", "That the Song Dynasty had suppressed all forms of technological development in China"
        ],
        answer: "A"
      },
      {
        num: 7,
        set: 1,
        stem: "Genghis Khan's practice of destroying cities that resisted Mongol conquest most directly served which of the following purposes?",
        choices: [
          "A", "Demonstrating Mongol religious devotion through ritual destruction",
          "B", "Creating uninhabited buffer zones to protect against future invasions",
          "C", "Deterring further resistance by making a devastating example of those who opposed Mongol authority",
          "D", "Eliminating potential trade competitors to benefit Mongol merchants"
        ],
        answer: "C"
      },
      {
        num: 8,
        set: 1,
        stem: "A historian would most likely use William of Rubruck's account of Karakorum to support which of the following arguments?",
        choices: [
          "A", "European Christian missionaries successfully converted the Mongol ruling elite",
          "B", "Karakorum was a cosmopolitan center that reflected the Mongol Empire's diverse religious and cultural composition",
          "C", "The Mongol capital was technologically more advanced than any contemporary European city",
          "D", "Mongol rulers actively suppressed all religions except Buddhism"
        ],
        answer: "B"
      },
      {
        num: 9,
        set: 1,
        stem: "The eventual fragmentation of the Mongol Empire into separate khanates by the late thirteenth century was most directly caused by which of the following?",
        choices: [
          "A", "The complete adoption of Islam by all Mongol rulers, which eliminated political diversity",
          "B", "An empire-wide peasant revolution inspired by Confucian ideology",
          "C", "The military defeat of the Mongols by a unified European crusading army",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 10,
        set: 1,
        stem: "The Pax Mongolica's facilitation of cross-cultural exchange most directly contributed to which of the following long-term developments?",
        choices: [
          "A", "The permanent political unification of Eurasia under a single government",
          "B", "The complete disappearance of distinct regional cultures in favor of a homogeneous Mongol culture",
          "C", "The diffusion of ideas and technologies that would later contribute to transformative developments in Europe and the Islamic world",
          "D", "The immediate industrialization of Central Asian economies"
        ],
        answer: "C"
      },
      {
        num: 11,
        set: 1,
        stem: "Which of the following developments in the period after the decline of the Mongol Empire most directly resulted from the disruption of overland Eurasian trade routes?",
        choices: [
          "A", "European interest in finding alternative maritime routes to Asia, contributing to the Age of Exploration",
          "B", "The complete cessation of all trade between Europe and Asia for several centuries",
          "C", "The establishment of the Ottoman Empire as a Mongol successor state",
          "D", "The rejection of gunpowder weapons by European armies"
        ],
        answer: "A"
      },
      // SET 2 — Questions 12-22: Ming Dynasty China (c. 1368-1644)
      {
        num: 12,
        set: 2,
        stem: "The Ming restoration of the Confucian civil service examination system most directly served which of the following purposes?",
        choices: [
          "A", "Encouraging foreign merchants to settle permanently in Chinese port cities",
          "B", "Replacing Buddhism as the dominant religion in Chinese society",
          "C", "Preparing Chinese scholars for careers in maritime exploration and naval command",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 13,
        set: 2,
        stem: "The Ming court's decision to sponsor Zheng He's maritime expeditions is best understood as an attempt to accomplish which of the following?",
        choices: [
          "A", "Establish permanent Chinese colonies throughout Southeast Asia and East Africa",
          "B", "Convert foreign populations to Confucianism through cultural missions",
          "C", "Project imperial prestige and establish tributary relationships with foreign states",
          "D", "Discover a sea route to Europe to compete with Ottoman overland trade"
        ],
        answer: "C"
      },
      {
        num: 14,
        set: 2,
        stem: "The scale of Zheng He's treasure fleet compared to later European exploratory voyages most directly demonstrates which of the following?",
        choices: [
          "A", "China's technological and organizational superiority in maritime capabilities during the early fifteenth century",
          "B", "The inability of European nations to construct seaworthy vessels before the sixteenth century",
          "C", "Zheng He's intention to conquer and colonize the lands he visited",
          "D", "The Ming court's primary interest in converting foreign peoples to Buddhism"
        ],
        answer: "A"
      },
      {
        num: 15,
        set: 2,
        stem: "The Ming decision to curtail maritime expeditions after 1433 was most directly influenced by which of the following factors?",
        choices: [
          "A", "The complete destruction of the Chinese navy in a war with Japan",
          "B", "A popular revolution demanding that the government focus on overseas expansion",
          "C", "The discovery that no valuable trade goods existed outside of China",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 16,
        set: 2,
        stem: "The Single Whip Reform's requirement that taxes be paid in silver most directly resulted in which of the following?",
        choices: [
          "A", "The decline of China's domestic agricultural production",
          "B", "The replacement of Confucianism with mercantilism as the dominant economic philosophy",
          "C", "The immediate collapse of the Ming Dynasty due to inability to collect taxes",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 17,
        set: 2,
        stem: "The flow of silver from Spanish colonial mines to China via the Manila galleon trade most directly illustrates which of the following historical developments?",
        choices: [
          "A", "The complete domination of global trade by European colonial powers",
          "B", "The decline of silver as a valuable commodity in the early modern period",
          "C", "China's military conquest of the Philippine Islands",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 18,
        set: 2,
        stem: "Which of the following best explains a significant difference between Ming China's approach to maritime activity and that of contemporary Portugal?",
        choices: [
          "A", "Portugal sought to establish trade monopolies and permanent overseas bases, while Ming China projected power through tributary diplomacy without seeking territorial control",
          "B", "Ming China sent larger fleets but was technologically inferior to Portuguese shipbuilders",
          "C", "Portugal focused exclusively on the Atlantic while China dominated the Mediterranean",
          "D", "Ming expeditions were motivated by religious conversion while Portuguese voyages were purely scientific"
        ],
        answer: "A"
      },
      {
        num: 19,
        set: 2,
        stem: "The Ming reconstruction of the Great Wall most directly reflected which of the following imperial priorities?",
        choices: [
          "A", "Promoting tourism as a source of government revenue",
          "B", "Isolating China entirely from all forms of foreign contact and trade",
          "C", "Defending the northern frontier against the persistent threat of nomadic incursions",
          "D", "Symbolizing the emperor's rejection of Confucian values in favor of Legalism"
        ],
        answer: "C"
      },
      {
        num: 20,
        set: 2,
        stem: "A historian studying Ming China's role in the early modern global economy would most likely emphasize which of the following?",
        choices: [
          "A", "China was entirely isolated from global trade throughout the Ming period",
          "B", "China's economy was too small to have any significant impact on global commerce",
          "C", "The Ming Dynasty actively promoted free trade and welcomed unlimited foreign access to Chinese markets",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 21,
        set: 2,
        stem: "The passage's description of Zheng He as a 'Muslim eunuch admiral' best illustrates which of the following aspects of Ming court culture?",
        choices: [
          "A", "The Ming court's exclusive reliance on Muslim officials for all government positions",
          "B", "The dominance of Islam as the state religion of Ming China",
          "C", "$PLACEHOLDER$",
          "D", "The inability of non-Chinese individuals to hold positions of authority in the Ming government"
        ],
        answer: "C"
      },
      {
        num: 22,
        set: 2,
        stem: "Which of the following was a long-term consequence of the Ming Dynasty's relative maritime withdrawal after 1433?",
        choices: [
          "A", "China permanently lost the technological capability to build oceangoing ships",
          "B", "European maritime powers gradually came to dominate Indian Ocean and Pacific trade routes that China had once explored",
          "C", "Japan immediately filled the vacuum by launching its own overseas colonial empire",
          "D", "The Indian Ocean trade network ceased to function entirely"
        ],
        answer: "B"
      },
      // SET 3 — Questions 23-33: Latin American Colonial Societies (c. 1450-1750)
      {
        num: 23,
        set: 3,
        stem: "The transition from the encomienda system to the hacienda system in colonial Latin America most directly reflected which of the following developments?",
        choices: [
          "A", "The Spanish Crown's complete abandonment of all colonial economic activities",
          "B", "The replacement of agriculture with manufacturing as the primary colonial economic activity",
          "C", "The voluntary decision of indigenous peoples to work on large estates rather than in their own communities",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 24,
        set: 3,
        stem: "The casta system in Spanish colonial societies most directly served which of the following functions?",
        choices: [
          "A", "Promoting social mobility by allowing individuals to change their racial classification through education",
          "B", "Eliminating all racial distinctions in favor of a unified colonial identity",
          "C", "$PLACEHOLDER$",
          "D", "Encouraging intermarriage between all racial groups to create a homogeneous population"
        ],
        answer: "C"
      },
      {
        num: 25,
        set: 3,
        stem: "The silver mines of Potosí most directly contributed to which of the following global economic developments?",
        choices: [
          "A", "The decline of European trade with Asia due to a surplus of precious metals",
          "B", "The immediate industrialization of the Spanish colonial economy",
          "C", "$PLACEHOLDER$",
          "D", "The replacement of silver with paper currency in all major economies"
        ],
        answer: "C"
      },
      {
        num: 26,
        set: 3,
        stem: "The Spanish colonial adaptation of the Inca mita system to supply labor for silver mines best illustrates which of the following patterns of colonialism?",
        choices: [
          "A", "The complete rejection of all pre-existing indigenous institutions by European colonizers",
          "B", "The replacement of indigenous labor with exclusively enslaved African workers in all mining operations",
          "C", "The voluntary participation of indigenous workers in colonial mining operations",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 27,
        set: 3,
        stem: "Jesuit missions (reducciones) in colonial Latin America are best characterized as institutions that served which of the following dual purposes?",
        choices: [
          "A", "Training indigenous peoples for positions in the Spanish colonial government and military",
          "B", "Preserving indigenous religions and preventing any form of European cultural influence",
          "C", "$PLACEHOLDER$",
          "D", "Operating as independent political states outside the control of both the Spanish Crown and the Catholic Church"
        ],
        answer: "C"
      },
      {
        num: 28,
        set: 3,
        stem: "The description of Potosí as 'one of the largest cities in the world' at its peak most directly supports which of the following historical arguments?",
        choices: [
          "A", "Colonial resource extraction created enormous concentrations of population and economic activity in the Americas",
          "B", "Spanish colonial cities were larger than all contemporary European capitals",
          "C", "Indigenous peoples voluntarily migrated to Potosí for economic opportunities",
          "D", "Silver mining had minimal demographic or environmental impacts on colonial society"
        ],
        answer: "A"
      },
      {
        num: 29,
        set: 3,
        stem: "Which of the following best explains why peninsulares occupied a higher social position than criollos in the casta system, despite both groups being of European descent?",
        choices: [
          "A", "Peninsulares had larger landholdings than criollos in every region of the colonial empire",
          "B", "The Spanish Crown favored Iberian-born subjects for positions of political authority to maintain imperial control over the colonies",
          "C", "Criollos had voluntarily renounced their European identity by choosing to live in the Americas",
          "D", "Peninsulares were considered racially superior to criollos due to their mixed-race ancestry"
        ],
        answer: "B"
      },
      {
        num: 30,
        set: 3,
        stem: "The flow of Potosí silver through the Manila galleon trade to China most directly resulted from which of the following?",
        choices: [
          "A", "Chinese military threats forcing Spain to pay tribute in silver",
          "B", "Spain's desire to convert Chinese populations to Christianity",
          "C", "Chinese demand for silver as currency, combined with European demand for Chinese luxury goods",
          "D", "A formal trade agreement negotiated between the Ming Emperor and the Spanish Crown"
        ],
        answer: "C"
      },
      {
        num: 31,
        set: 3,
        stem: "Which of the following groups in colonial Latin American society would have been most likely to challenge the casta system by the eighteenth century?",
        choices: [
          "A", "Peninsulares who benefited from their privileged position at the top of the social hierarchy",
          "B", "Criollos who possessed wealth and education but were excluded from the highest positions of political power",
          "C", "Indigenous peoples who had been fully assimilated into Spanish colonial culture",
          "D", "Spanish colonial officials who sought to eliminate all racial distinctions"
        ],
        answer: "B"
      },
      {
        num: 32,
        set: 3,
        stem: "The labor conditions described at Potosí most closely paralleled labor practices in which of the following contemporary contexts?",
        choices: [
          "A", "The guild system of artisan production in medieval European cities",
          "B", "The free wage labor system of early English factories",
          "C", "The plantation slavery system in the Caribbean and Brazil",
          "D", "The nomadic herding economies of the Central Asian steppe"
        ],
        answer: "C"
      },
      {
        num: 33,
        set: 3,
        stem: "A historian would most likely use the passage's description of colonial Latin American society to support which of the following arguments?",
        choices: [
          "A", "Spanish colonialism created entirely egalitarian societies in the Americas",
          "B", "The Catholic Church played no significant role in shaping colonial Latin American society",
          "C", "Indigenous peoples successfully resisted all forms of Spanish cultural and economic domination",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      // SET 4 — Questions 34-44: Nationalist Movements in Asia & Africa (c. 1900-present)
      {
        num: 34,
        set: 4,
        stem: "Gandhi's strategy of nonviolent civil disobedience was most directly influenced by which of the following intellectual traditions?",
        choices: [
          "A", "$PLACEHOLDER$",
          "B", "Marxist theories of class struggle and proletarian revolution",
          "C", "The military strategies of European colonial powers adapted for anticolonial purposes",
          "D", "Social Darwinist arguments about racial competition and survival of the fittest"
        ],
        answer: "A"
      },
      {
        num: 35,
        set: 4,
        stem: "The Negritude movement's celebration of African cultural identity most directly challenged which of the following aspects of European colonialism?",
        choices: [
          "A", "The economic exploitation of African natural resources by European corporations",
          "B", "The racist ideology that portrayed African cultures as inherently inferior to European civilization",
          "C", "The military occupation of African territories by European armies",
          "D", "The Christian missionary movement's efforts to convert African populations"
        ],
        answer: "B"
      },
      {
        num: 36,
        set: 4,
        stem: "The Bandung Conference of 1955 was most significant because it represented which of the following developments in international relations?",
        choices: [
          "A", "The formation of a new military alliance to challenge NATO and the Warsaw Pact",
          "B", "The emergence of a collective voice among formerly colonized nations asserting independence from Cold War power blocs",
          "C", "The agreement of Asian and African nations to align exclusively with the Soviet Union",
          "D", "The establishment of a permanent international organization to replace the United Nations"
        ],
        answer: "B"
      },
      {
        num: 37,
        set: 4,
        stem: "The evolution of the Indian National Congress from a 'moderate reform organization' to a 'mass movement' was most directly facilitated by which of the following?",
        choices: [
          "A", "The British decision to grant India full independence in 1919",
          "B", "The unification of Hindu and Muslim communities into a single political party",
          "C", "The complete abandonment of nonviolent methods in favor of armed revolution",
          "D", "$PLACEHOLDER$"
        ],
        answer: "D"
      },
      {
        num: 38,
        set: 4,
        stem: "The passage's observation that 'some transitions were negotiated peacefully, while others involved prolonged and violent struggle' most directly reflects which of the following?",
        choices: [
          "A", "The willingness of all European colonial powers to grant independence voluntarily",
          "B", "The uniform application of nonviolent resistance strategies across all independence movements",
          "C", "The varied responses of colonial powers to independence demands, shaped by local conditions and the strategic interests of the metropole",
          "D", "The absence of any common factors linking different independence movements"
        ],
        answer: "C"
      },
      {
        num: 39,
        set: 4,
        stem: "Pan-Africanism as an ideology most directly drew upon which of the following historical experiences?",
        choices: [
          "A", "The shared experience of European colonialism and the African diaspora created by the Atlantic slave trade",
          "B", "The success of European nationalist movements in creating ethnically homogeneous nation-states",
          "C", "The religious unity of all African peoples under a single faith tradition",
          "D", "The economic prosperity of African nations during the colonial period"
        ],
        answer: "A"
      },
      {
        num: 40,
        set: 4,
        stem: "Algeria's war of independence against France (1954-1962) differed from India's independence movement most significantly in which of the following ways?",
        choices: [
          "A", "Algeria had no history of organized resistance to colonial rule before 1954",
          "B", "India achieved independence through primarily nonviolent means, while Algeria's independence required sustained armed conflict",
          "C", "France was more willing to negotiate with Algerian nationalists than Britain was with Indian nationalists",
          "D", "The Algerian independence movement lacked any ideological foundation"
        ],
        answer: "B"
      },
      {
        num: 41,
        set: 4,
        stem: "The concept of nonalignment articulated at the Bandung Conference was most directly a response to which of the following Cold War dynamics?",
        choices: [
          "A", "$PLACEHOLDER$",
          "B", "The threat of nuclear annihilation from conflicts between the United States and Soviet Union",
          "C", "The desire of newly independent nations to form their own nuclear weapons programs",
          "D", "The complete absence of foreign aid from either Cold War superpower"
        ],
        answer: "A"
      },
      {
        num: 42,
        set: 4,
        stem: "Which of the following best explains a major challenge faced by newly independent Asian and African nations in the post-colonial period?",
        choices: [
          "A", "$PLACEHOLDER$",
          "B", "The immediate achievement of economic prosperity and political stability upon gaining independence",
          "C", "The rapid and total elimination of all European cultural and economic influences",
          "D", "The absence of any educated leadership capable of governing new nation-states"
        ],
        answer: "A"
      },
      {
        num: 43,
        set: 4,
        stem: "Léopold Sédar Senghor's contributions to both the Negritude movement and Senegalese politics best illustrate which of the following patterns in twentieth-century decolonization?",
        choices: [
          "A", "The complete separation of cultural movements from political action in the colonial world",
          "B", "The connection between intellectual and cultural movements asserting colonial subjects' dignity and the political struggle for national independence",
          "C", "The dominance of European-educated elites who rejected all aspects of African cultural heritage",
          "D", "The irrelevance of cultural identity to the process of decolonization"
        ],
        answer: "B"
      },
      {
        num: 44,
        set: 4,
        stem: "The passage's reference to colonial soldiers returning home 'with heightened expectations of political rights' most directly connects to which of the following broader historical patterns?",
        choices: [
          "A", "Military service in imperial conflicts often raised colonized peoples' awareness of inequality and strengthened demands for self-determination",
          "B", "Colonial soldiers universally rejected the nationalist movements in their home countries",
          "C", "European powers immediately granted full citizenship rights to all colonial veterans after World War I",
          "D", "Military service convinced colonial subjects that European civilization was superior to their own"
        ],
        answer: "A"
      },
      // SET 5 — Questions 45-55: Post-Cold War World (c. 1990-present)
      {
        num: 45,
        set: 5,
        stem: "The expansion of the European Union after 1992 most directly represented which of the following post-Cold War developments?",
        choices: [
          "A", "The reimposition of colonial control over former Soviet territories by Western European powers",
          "B", "The political and economic integration of formerly divided European nations into a supranational organization",
          "C", "The military unification of Europe under a single defense force to oppose the United States",
          "D", "The rejection of democratic governance by Eastern European nations in favor of authoritarian rule"
        ],
        answer: "B"
      },
      {
        num: 46,
        set: 5,
        stem: "China's economic transformation under Deng Xiaoping's reforms is best characterized as which of the following?",
        choices: [
          "A", "A complete transition to Western-style liberal democracy and free-market capitalism",
          "B", "A return to Maoist economic policies emphasizing collective agriculture and heavy industry",
          "C", "The integration of market-oriented economic reforms within a single-party communist political system",
          "D", "The total rejection of globalization and international trade in favor of economic self-sufficiency"
        ],
        answer: "C"
      },
      {
        num: 47,
        set: 5,
        stem: "The September 11, 2001, attacks and the subsequent 'War on Terror' most directly led to which of the following developments?",
        choices: [
          "A", "The permanent resolution of all conflicts in the Middle East",
          "B", "Increased international cooperation on counterterrorism but also debates about civil liberties, surveillance, and military intervention",
          "C", "The immediate withdrawal of all Western military forces from the Middle East and Central Asia",
          "D", "The universal acceptance of American leadership in global affairs by all nations"
        ],
        answer: "B"
      },
      {
        num: 48,
        set: 5,
        stem: "The 2015 Paris Agreement on climate change most directly reflected which of the following realities of the post-Cold War era?",
        choices: [
          "A", "Environmental challenges transcend national borders and require coordinated international responses",
          "B", "Individual nations can effectively address climate change without international cooperation",
          "C", "Developing nations bear no responsibility for greenhouse gas emissions",
          "D", "The problem of climate change had been fully resolved by 2015"
        ],
        answer: "A"
      },
      {
        num: 49,
        set: 5,
        stem: "The digital revolution's impact on political movements such as the Arab Spring most directly demonstrates which of the following?",
        choices: [
          "A", "Social media always leads to the establishment of stable democratic governments",
          "B", "Digital technologies can serve as tools for political mobilization and the rapid dissemination of information",
          "C", "Traditional forms of political organization became entirely irrelevant after the invention of the internet",
          "D", "Authoritarian governments are incapable of using digital technologies for their own purposes"
        ],
        answer: "B"
      },
      {
        num: 50,
        set: 5,
        stem: "The passage's reference to 'digital inequality' most directly parallels which of the following historical phenomena?",
        choices: [
          "A", "The unequal distribution of the benefits of industrialization between wealthy and poor nations in the nineteenth century",
          "B", "The complete elimination of economic inequality through technological progress",
          "C", "The uniform distribution of internet access to all populations worldwide",
          "D", "The replacement of all traditional economies with digital platforms"
        ],
        answer: "A"
      },
      {
        num: 51,
        set: 5,
        stem: "Critics of globalization described in the passage would most likely agree with which of the following statements?",
        choices: [
          "A", "Free trade agreements benefit all nations equally and should be expanded without restriction",
          "B", "Globalization has disproportionately benefited wealthy nations and corporations while exploiting workers in developing countries",
          "C", "Cultural homogenization is a positive development that promotes global unity",
          "D", "National governments should have no role in regulating international trade"
        ],
        answer: "B"
      },
      {
        num: 52,
        set: 5,
        stem: "The establishment of the World Trade Organization in 1995 most directly built upon which of the following earlier developments?",
        choices: [
          "A", "The protectionist tariff policies of the 1930s that deepened the Great Depression",
          "B", "The Bretton Woods system and the General Agreement on Tariffs and Trade (GATT), which promoted international economic cooperation after World War II",
          "C", "The Soviet Union's system of centralized economic planning and state-controlled trade",
          "D", "The mercantilist policies of European colonial empires in the seventeenth and eighteenth centuries"
        ],
        answer: "B"
      },
      {
        num: 53,
        set: 5,
        stem: "Which of the following best explains why China's economic rise after 1990 was viewed with both admiration and concern by other nations?",
        choices: [
          "A", "China's growth demonstrated the viability of combining market reforms with authoritarian governance, challenging the assumption that economic development requires liberal democracy",
          "B", "China's economy remained too small to affect global trade patterns",
          "C", "China's growth was entirely dependent on foreign aid from Western nations",
          "D", "China immediately adopted all Western political institutions alongside its economic reforms"
        ],
        answer: "A"
      },
      {
        num: 54,
        set: 5,
        stem: "The backlash against 'cultural homogenization' described in the passage is most directly comparable to which of the following historical reactions?",
        choices: [
          "A", "The Luddite movement's destruction of industrial machinery in nineteenth-century England",
          "B", "Nineteenth-century nationalist movements that emphasized unique cultural identities in opposition to imperial homogenization",
          "C", "The Reformation's challenge to Catholic religious authority",
          "D", "The Scientific Revolution's rejection of classical Greek philosophy"
        ],
        answer: "B"
      },
      {
        num: 55,
        set: 5,
        stem: "A historian studying the period since 1990 would most likely characterize it as one in which which of the following tensions has been most prominent?",
        choices: [
          "A", "The conflict between expanding global interconnection and persistent national, cultural, and economic divisions",
          "B", "The complete triumph of a single political and economic model accepted by all nations",
          "C", "The total reversal of globalization and a return to isolated national economies",
          "D", "The elimination of all forms of armed conflict through international diplomacy"
        ],
        answer: "A"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, Timur/Tamerlane's conquests
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Timur's Conquests & Their Impact",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source 1",
            title: "Persian miniature painting depicting a battle from Timur's campaigns, c. 1400",
            description: "A Persian miniature painting showing Timur (Tamerlane) leading a cavalry charge during his military conquests across Central and South Asia.",
            figureId: "sim4-saq1-timur-battle",
            text: ""
          },
          {
            label: "Source 2",
            title: "Sharaf al-Din Ali Yazdi, Zafarnama (Book of Victory), c. 1425",
            description: "Sharaf al-Din Ali Yazdi was a Persian court historian who composed this chronicle celebrating the military campaigns of Timur (Tamerlane), the Central Asian conqueror who established a vast empire from Anatolia to India in the late fourteenth century.",
            text: "The victorious lord, the conqueror of the world, Amir Timur, having subdued the lands of Persia and Mesopotamia, turned his gaze upon the sultanate of Delhi. His army crossed the Indus in the year 1398 and advanced upon the great city. The sultan's forces, though numerous, could not withstand the fury of the Timurid cavalry. The city was taken, and for three days the soldiers were permitted to collect the wealth that had accumulated over centuries. The artisans and craftsmen of Delhi — weavers, metalworkers, masons, and architects — were gathered and transported to Samarkand, where they would embellish the capital with mosques, madrasas, and palaces of surpassing beauty. Thus did the lord Timur transform Samarkand into the jewel of the world, adorned with the skills and treasures of the conquered lands."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way the source illustrates the methods Timur used to build and maintain his empire." },
          { letter: "B", prompt: "Explain ONE way Timur's conquests affected the political or economic development of a specific region in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE way in which the author's perspective as a court historian might affect the reliability of this account." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a method such as devastating military conquest to eliminate opposition, the forced relocation of skilled artisans to enrich the imperial capital, or the seizure of wealth from conquered cities to finance further campaigns." },
          { row: "B", category: "Part B", points: 1, description: "Explains a political or economic effect such as the destruction of the Delhi Sultanate's power, the disruption of trade routes across Central and South Asia, the enrichment of Samarkand as a cultural and commercial center, or the destabilization of existing political structures in Persia and Mesopotamia." },
          { row: "C", category: "Part C", points: 1, description: "Explains a limitation such as the author's role as a court historian motivated to glorify Timur's achievements, the likely minimization or omission of atrocities and civilian suffering, or the presentation of conquest as divinely ordained rather than as violent imperialism." }
        ]
      },
      // SAQ 2 — Secondary source, impact of printing press on Reformation
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — The Printing Press & the Reformation",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Elizabeth Eisenstein, The Printing Revolution in Early Modern Europe (1983)",
            description: "Elizabeth Eisenstein was an American historian whose work examined the impact of the printing press on European culture, religion, and politics. This excerpt is from her influential study of the Gutenberg revolution.",
            text: "The printing press transformed the dynamics of religious dissent in sixteenth-century Europe. Before Gutenberg, heretical ideas could be suppressed relatively easily — manuscripts were few, expensive to copy, and controlled by monastic scriptoria loyal to the Church. After the introduction of movable type, however, the situation changed dramatically. Martin Luther's Ninety-Five Theses, posted in 1517, were translated from Latin into German, printed in pamphlet form, and distributed across the Holy Roman Empire within weeks. By 1520, Luther had become the first best-selling author in the history of print. The sheer volume and speed of production overwhelmed the Church's traditional mechanisms of censorship. Printed Bibles in vernacular languages enabled literate laypeople to read and interpret scripture for themselves, undermining the clergy's monopoly on religious knowledge. The press did not cause the Reformation — deep grievances about corruption and theological disputes already existed — but it amplified and accelerated the spread of reformist ideas in ways that would have been inconceivable in a manuscript culture."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE specific way the printing press changed the dissemination of ideas in early modern Europe, according to the source." },
          { letter: "B", prompt: "Explain ONE way in which the spread of printed vernacular Bibles affected the social or political order in sixteenth-century Europe." },
          { letter: "C", prompt: "Explain ONE way in which technological innovations OTHER than the printing press similarly transformed the spread of ideas in a different historical period." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific change such as the rapid reproduction and distribution of Luther's writings, the shift from expensive manuscripts to affordable printed pamphlets, or the undermining of Church censorship through the sheer volume of printed material." },
          { row: "B", category: "Part B", points: 1, description: "Explains a social or political effect such as the empowerment of literate laypeople to challenge clerical authority, the fragmentation of Western Christianity into competing denominations, the Wars of Religion, or the strengthening of vernacular national identities." },
          { row: "C", category: "Part C", points: 1, description: "Explains a parallel such as the telegraph and newspapers accelerating political movements in the nineteenth century, radio and film enabling mass propaganda in the twentieth century, or the internet and social media transforming political mobilization in the twenty-first century." }
        ]
      },
      // SAQ 3 — No stimulus, Silk Roads exchange (c. 1200-1450)
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Cross-Cultural Exchange Along the Silk Roads (c. 1200-1450)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE example of how goods or technologies were exchanged along the Silk Roads in the period c. 1200-1450." },
          { letter: "B", prompt: "Explain ONE way that the exchange of ideas or religions along the Silk Roads affected the cultural development of a specific society in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE way that political developments in the period c. 1200-1450 either facilitated or disrupted exchange along the Silk Roads." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific example such as the exchange of Chinese silk, porcelain, or gunpowder technology westward; the movement of Central Asian horses and glassware eastward; or the transmission of papermaking and compass technology." },
          { row: "B", category: "Part B", points: 1, description: "Explains a cultural effect such as the spread of Islam into Central and Southeast Asia through Sufi merchants and missionaries, the influence of Buddhist art across Central Asia, or the transmission of scientific and mathematical knowledge from the Islamic world to Europe." },
          { row: "C", category: "Part C", points: 1, description: "Explains a political development such as the Pax Mongolica facilitating safe passage for merchants, the fragmentation of the Mongol Empire disrupting trade, the Black Death reducing trade volume, or the rise of the Ottoman Empire controlling key Silk Road termini." }
        ]
      },
      // SAQ 4 — No stimulus, genocide in the 20th century
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Causes and Consequences of Genocide in the 20th Century",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE cause of a specific genocide that occurred during the twentieth century." },
          { letter: "B", prompt: "Explain ONE way that genocide affected the political or social development of a specific state or region during or after the twentieth century." },
          { letter: "C", prompt: "Explain ONE way that the international community responded to genocide during the twentieth century and evaluate the effectiveness of that response." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific cause such as the Armenian Genocide driven by Ottoman wartime nationalism and suspicion of Armenian disloyalty, the Holocaust driven by Nazi racial ideology and antisemitism, the Rwandan genocide fueled by Hutu extremism and colonial-era ethnic divisions, or the Cambodian genocide driven by Khmer Rouge ideology." },
          { row: "B", category: "Part B", points: 1, description: "Explains a political or social effect such as the decimation and diaspora of the Armenian population, the establishment of Israel and international human rights frameworks after the Holocaust, the post-genocide reconciliation process in Rwanda, or the lasting trauma and political instability in Cambodia." },
          { row: "C", category: "Part C", points: 1, description: "Explains a response such as the Nuremberg Trials establishing the principle of individual criminal responsibility, the UN Convention on Genocide (1948), the failure of the international community to intervene effectively in Rwanda, or the creation of the International Criminal Court, with an evaluation of its effectiveness or limitations." }
        ]
      },
      // DBQ — Reform movements in Ottoman, Chinese, and/or Japanese societies (c. 1839-1912)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which reform movements transformed Ottoman, Chinese, and/or Japanese societies in the period circa 1839-1912.",
        documents: [
          {
            num: 1,
            source: "Sultan Abdülmecid I, Imperial Edict of Gülhane (Tanzimat Decree), 1839",
            text: "It is evident that countries not governed by the principles of justice are not durable. From henceforth, every accused person shall be tried publicly according to law, and no one shall be secretly put to death. All subjects of our empire shall enjoy security in their life, honor, and property. Taxes shall be levied and distributed in a regular and equitable manner. The Muslim and non-Muslim subjects of our empire shall, without exception, enjoy our imperial concessions."
          },
          {
            num: 2,
            source: "Feng Guifen, Chinese scholar-official, Personal Protests from the Study of Jiaobin, 1861",
            text: "What we need to learn from the barbarians is only one thing — solid ships and effective guns. Our Confucian moral teachings and the established political institutions are vastly superior to those of the West. We should use Chinese learning as the foundation and Western learning for practical application. If we can manufacture our own weapons and train our own soldiers, we shall be able to resist foreign aggression and restore our national strength without abandoning the principles of our sages."
          },
          {
            num: 3,
            source: "Charter Oath of the Meiji Emperor, April 1868",
            figureId: "sim4-dbq-doc3-meiji-emperor",
            text: "1. Deliberative assemblies shall be widely established and all matters decided by public discussion. 2. All classes, high and low, shall unite in vigorously carrying out the administration of affairs of state. 3. The common people, no less than the civil and military officials, shall each be allowed to pursue his own calling so that there may be no discontent. 4. Evil customs of the past shall be broken off and everything based upon the just laws of Nature. 5. Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule."
          },
          {
            num: 4,
            source: "Midhat Pasha, Ottoman Grand Vizier, memorandum to Sultan Abdülhamid II, 1876",
            text: "The adoption of a written constitution is the only means of ensuring the survival of the Ottoman state. The European powers use our lack of constitutional governance as a pretext for intervention in our affairs. A parliament representing all the peoples of the empire — Turks, Arabs, Greeks, Armenians — would demonstrate that our empire is a civilized state governed by law, not by despotism. Without such reform, the empire will continue to lose territory to nationalist separatist movements and European encroachment."
          },
          {
            num: 5,
            source: "Itō Hirobumi, architect of the Meiji Constitution, commentary on constitutional government, 1889",
            text: "In Europe, constitutional government has grown over a period of more than a thousand years. In Japan, we must accomplish in decades what took centuries elsewhere. We have carefully studied the constitutional systems of various European nations and have determined that the Prussian model is best suited to our conditions, as it preserves the sovereign authority of the emperor while establishing a legislature to represent the people. The constitution is not granted by the people to the emperor; it is bestowed by the emperor upon his subjects as an act of benevolence."
          },
          {
            num: 6,
            source: "Kang Youwei, Memorial to the Guangxu Emperor proposing the Hundred Days' Reform, 1898",
            text: "The nations of Europe and Japan have become wealthy and powerful by adopting new methods of governance, education, and economic organization. China, by clinging to outdated institutions and refusing to reform, has fallen behind and suffered humiliating defeats. I respectfully urge Your Majesty to establish modern schools, reform the examination system, create a national army modeled on Western methods, encourage commerce and industry, and grant the people a measure of self-governance through deliberative assemblies. If we do not act now, China will be carved up among the foreign powers like a melon."
          },
          {
            num: 7,
            source: "Young Turk proclamation following the constitutional revolution, 1908",
            text: "The tyranny and despotism of Sultan Abdülhamid have brought the empire to the brink of ruin. The constitution that was granted in 1876 and then suspended must be restored. All Ottoman subjects, regardless of religion or nationality, must enjoy equal rights and freedoms under the law. The parliament must be reconvened and the government conducted according to constitutional principles. Only through liberty, equality, and justice can the Ottoman Empire be saved from dismemberment."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — Economic systems and change
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, evaluate the extent to which long-distance trade networks transformed the economies of societies in Afro-Eurasia." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which mercantilist policies shaped the development of colonial economies in the Americas." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which debates over free trade versus protectionism shaped the development of the global economy." }
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
  {
    id: "sim5",
    label: "Practice Simulation 5",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        title: "Set 1 — Byzantine Empire & Eastern Christianity (c. 1200-1450)",
        passage: "The Byzantine Empire, the eastern continuation of the Roman Empire, preserved and transmitted Greco-Roman legal, artistic, and intellectual traditions for over a millennium. Emperor Justinian I (r. 527-565) codified Roman law into the Corpus Juris Civilis, a comprehensive legal compilation that would later influence the development of Western European legal systems. The Byzantines also pioneered the use of Greek fire, an incendiary weapon that helped defend Constantinople against repeated sieges. The Iconoclast Controversy of the eighth and ninth centuries, in which Byzantine emperors attempted to ban the veneration of religious images (icons), created a bitter theological rift within Eastern Christianity and deepened tensions with the papacy in Rome. The Great Schism of 1054 formally divided Christianity into the Roman Catholic Church in the West and the Eastern Orthodox Church centered in Constantinople. Orthodox missionaries, most notably Saints Cyril and Methodius, spread Christianity and the Cyrillic alphabet to Slavic peoples in Eastern Europe. By the thirteenth century, however, the empire was in decline: the Fourth Crusade of 1204 saw Western crusaders sack Constantinople itself, devastating the city and fatally weakening Byzantine power. The empire limped on for another two and a half centuries until Sultan Mehmed II of the Ottoman Empire captured Constantinople on May 29, 1453, ending the Byzantine state and transforming the great cathedral of Hagia Sophia into a mosque."
      },
      {
        id: "set2",
        setNum: 2,
        figureId: "sim5-set2-mughal-taj-mahal",
        title: "Set 2 — Mughal Empire & Religious Syncretism (c. 1450-1750)",
        passage: "The Mughal Empire, founded by Babur in 1526, became one of the largest and wealthiest polities of the early modern world, governing much of the Indian subcontinent. Under Emperor Akbar (r. 1556-1605), the empire pursued a deliberate policy of religious tolerance and cultural synthesis. Akbar abolished the jizya (a tax on non-Muslims), appointed Hindu Rajput warriors to senior military and administrative positions, and convened interfaith debates at his court involving Muslim, Hindu, Christian, Jain, and Zoroastrian scholars. He eventually promulgated Din-i-Ilahi (Divine Faith), an eclectic spiritual doctrine that drew elements from multiple religious traditions. Mughal architecture blended Persian, Central Asian, and Indian styles, producing masterpieces such as the Taj Mahal, built by Shah Jahan as a mausoleum for his wife Mumtaz Mahal. However, Akbar's great-grandson Aurangzeb (r. 1658-1707) reversed many of these inclusive policies, reimposing the jizya, destroying Hindu temples, and pursuing a more orthodox Sunni Islamic agenda. Aurangzeb's intolerance alienated Hindu subjects and contributed to the rise of the Maratha Confederacy and the Sikh military tradition under Guru Gobind Singh. The Sikh religion, founded by Guru Nanak in the late fifteenth century, had emerged as a distinct faith emphasizing monotheism, social equality, and the rejection of caste distinctions, and Mughal persecution transformed the Sikh community into a formidable military force. By the early eighteenth century, the Mughal Empire was fragmenting, weakened by internal rebellions, regional power struggles, and the growing influence of European trading companies."
      },
      {
        id: "set3",
        setNum: 3,
        figureId: "sim5-set3-haitian-revolution",
        title: "Set 3 — Haitian Revolution & Atlantic Abolition Movements (c. 1750-1900)",
        passage: "The Haitian Revolution (1791-1804) was the only successful large-scale slave revolt in the Atlantic world, resulting in the establishment of Haiti as the first independent Black republic and the second independent nation in the Western Hemisphere. The revolution was rooted in the brutal conditions of the French colony of Saint-Domingue, where the Code Noir — a royal decree governing the treatment of enslaved people — theoretically regulated slavery but in practice did little to prevent extreme violence and exploitation on sugar plantations. Inspired by the ideals of the French Revolution and led by figures such as Toussaint Louverture, a formerly enslaved man who proved to be a brilliant military strategist, the enslaved population rose against their masters. Toussaint's forces defeated French, Spanish, and British armies before Napoleon Bonaparte sent an expedition to restore slavery; Toussaint was captured through treachery and died in a French prison, but his lieutenant Jean-Jacques Dessalines declared Haitian independence in January 1804. The Haitian Revolution sent shockwaves through the Atlantic world. Slaveholding societies in the United States, Cuba, and Brazil tightened restrictions on enslaved populations, fearing similar uprisings. Meanwhile, the revolution energized abolition movements: Britain abolished the slave trade in 1807 and emancipated enslaved people in its colonies in 1833, driven by a combination of humanitarian campaigning by figures such as William Wilberforce, economic arguments that free labor was more productive, and the undeniable demonstration in Haiti that enslaved people would fight for their freedom. The revolution also inspired independence movements across Latin America, as leaders like Simón Bolívar received material support from Haiti in exchange for promising to abolish slavery."
      },
      {
        id: "set4",
        setNum: 4,
        title: "Set 4 — Chinese Revolution & Mao's China (c. 1900-present)",
        passage: "The collapse of the Qing Dynasty in 1912 inaugurated decades of political turmoil in China. The May Fourth Movement of 1919, triggered by China's humiliation at the Treaty of Versailles — which transferred German concessions in Shandong Province to Japan rather than returning them to China — galvanized a generation of intellectuals who demanded modernization, democracy, and an end to foreign imperialism. From this ferment emerged the Chinese Communist Party (CCP), founded in 1921. Under Mao Zedong's leadership, the CCP survived Chiang Kai-shek's Nationalist campaigns, including the legendary Long March of 1934-1935, during which the Red Army retreated nearly 6,000 miles through some of China's most punishing terrain, forging the revolutionary cadre that would eventually triumph. After Japan's defeat in 1945 and a renewed civil war, the CCP proclaimed the People's Republic of China on October 1, 1949. Mao launched the Great Leap Forward (1958-1962), an ambitious campaign to rapidly industrialize China through collectivized agriculture and backyard steel production; the policy resulted in catastrophic famine that killed an estimated 15 to 45 million people, one of the deadliest human-caused disasters in history. In 1966, Mao initiated the Cultural Revolution, mobilizing young Red Guards to attack perceived enemies of the revolution — intellectuals, party officials, and anyone associated with traditional Chinese or Western culture were publicly humiliated, imprisoned, or killed. Schools and universities were closed for years, and China's cultural heritage suffered immense destruction. Mao's death in 1976 opened the way for Deng Xiaoping's market-oriented reforms, which would transform China into a global economic power."
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — Environmental History & Human Impact (c. 1200-present)",
        passage: "Human societies have profoundly altered the natural environment throughout history, and the pace and scale of these changes have accelerated dramatically in the modern era. Medieval deforestation in Europe, driven by agricultural expansion and demand for timber, transformed vast woodlands into farmland and contributed to soil erosion and flooding. The Little Ice Age (c. 1300-1850), a period of cooling temperatures in the Northern Hemisphere, caused crop failures, famines, and social upheaval across Europe and may have been partly intensified by the reforestation of abandoned farmland in the Americas following the catastrophic population decline of indigenous peoples after 1492. The Industrial Revolution, beginning in the late eighteenth century, inaugurated the era of fossil fuel dependence. Coal-powered factories and railways in Britain, followed by petroleum-fueled economies in the twentieth century, released unprecedented quantities of carbon dioxide into the atmosphere. The Green Revolution of the mid-twentieth century, spearheaded by agronomist Norman Borlaug, introduced high-yield crop varieties, chemical fertilizers, and modern irrigation techniques that dramatically increased food production in developing countries such as India and Mexico, averting predicted famines but also causing environmental damage through groundwater depletion, soil degradation, and chemical runoff. By the late twentieth century, scientific consensus had established that anthropogenic greenhouse gas emissions were driving global climate change, with consequences including rising sea levels, more frequent extreme weather events, biodiversity loss, and threats to food and water security. International responses, from the Kyoto Protocol (1997) to the Paris Agreement (2015), have sought to coordinate reductions in emissions, though implementation has been uneven and contested."
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: Byzantine Empire & Eastern Christianity (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "Justinian's Corpus Juris Civilis is most significant in world history because it accomplished which of the following?",
        choices: [
          "A", "Established the first democratic constitution in European history",
          "B", "Created a unified criminal code adopted by all medieval Islamic states",
          "C", "Abolished slavery throughout the Byzantine Empire",
          "D", "Codified Roman legal traditions that later influenced the development of Western European legal systems"
        ],
        answer: "D"
      },
      {
        num: 2,
        set: 1,
        stem: "The Iconoclast Controversy in the Byzantine Empire most directly reflected which of the following broader tensions?",
        choices: [
          "A", "Disputes over the proper relationship between religious imagery, theology, and imperial authority",
          "B", "Conflicts between the Byzantine Empire and the Abbasid Caliphate over territorial borders",
          "C", "Economic competition between Constantinople and Venice for control of Mediterranean trade",
          "D", "Disagreements about whether to adopt Latin or Greek as the official language of the empire"
        ],
        answer: "A"
      },
      {
        num: 3,
        set: 1,
        stem: "The Great Schism of 1054 between the Roman Catholic and Eastern Orthodox churches was most directly caused by which of the following?",
        choices: [
          "A", "The Ottoman conquest of Constantinople and forced conversion of Christians to Islam",
          "B", "The Protestant Reformation's challenge to papal authority",
          "C", "The spread of Buddhism into the Byzantine Empire from Central Asian trade routes",
          "D", "Accumulated theological, liturgical, and political disagreements between the papacy in Rome and the patriarchate in Constantinople"
        ],
        answer: "D"
      },
      {
        num: 4,
        set: 1,
        stem: "The work of Saints Cyril and Methodius among Slavic peoples best illustrates which of the following patterns in the spread of Christianity?",
        choices: [
          "A", "The use of military conquest as the primary means of religious conversion",
          "B", "The translation of religious texts and creation of writing systems to facilitate conversion among non-Greek-speaking peoples",
          "C", "The rejection of local languages in favor of imposing Greek as the sole language of worship",
          "D", "The complete elimination of all pre-Christian cultural practices among converted populations"
        ],
        answer: "B"
      },
      {
        num: 5,
        set: 1,
        stem: "The Fourth Crusade's sack of Constantinople in 1204 is historically significant primarily because it accomplished which of the following?",
        choices: [
          "A", "Permanently united the Roman Catholic and Eastern Orthodox churches",
          "B", "Established lasting Western European control over the entire Middle East",
          "C", "Fatally weakened the Byzantine Empire and deepened the divide between Eastern and Western Christianity",
          "D", "Demonstrated the superiority of Byzantine military technology over Western European forces"
        ],
        answer: "C"
      },
      {
        num: 6,
        set: 1,
        stem: "A historian arguing that the Byzantine Empire served as a crucial bridge between the ancient and modern worlds would most likely emphasize which of the following?",
        choices: [
          "A", "The Byzantine role in preserving and transmitting Greco-Roman knowledge that later influenced the Renaissance and European legal traditions",
          "B", "The Byzantine invention of gunpowder and the printing press",
          "C", "The Byzantine Empire's conquest of all of Western Europe during the medieval period",
          "D", "The complete rejection of classical learning by Byzantine scholars in favor of original research"
        ],
        answer: "A"
      },
      {
        num: 7,
        set: 1,
        stem: "The Ottoman capture of Constantinople in 1453 most directly resulted in which of the following developments?",
        choices: [
          "A", "The immediate collapse of Islam as a political force in the eastern Mediterranean",
          "B", "The migration of Greek scholars to Western Europe, contributing to the intellectual ferment of the Renaissance",
          "C", "The conversion of all Orthodox Christians in the former Byzantine territories to Islam",
          "D", "The restoration of the Western Roman Empire under Ottoman patronage"
        ],
        answer: "B"
      },
      {
        num: 8,
        set: 1,
        stem: "Greek fire, the incendiary weapon used by the Byzantines, most directly served which of the following strategic purposes?",
        choices: [
          "A", "Enabling Byzantine conquest of the entire Arabian Peninsula",
          "B", "Replacing cavalry as the primary offensive military force in Byzantine armies",
          "C", "Defending Constantinople against naval sieges by Arab and other attacking forces",
          "D", "Facilitating long-distance trade by clearing pirate ships from Mediterranean sea lanes"
        ],
        answer: "C"
      },
      {
        num: 9,
        set: 1,
        stem: "The transformation of Hagia Sophia from a cathedral into a mosque after 1453 best symbolizes which of the following historical processes?",
        choices: [
          "A", "The peaceful coexistence of Christianity and Islam throughout the medieval period",
          "B", "The Ottoman practice of destroying all conquered cultural monuments",
          "C", "The decline of Islamic architectural traditions in favor of European styles",
          "D", "The transfer of political and religious authority from a Christian to an Islamic empire in the eastern Mediterranean"
        ],
        answer: "D"
      },
      {
        num: 10,
        set: 1,
        stem: "Which of the following best explains a key difference between the spread of Eastern Orthodox Christianity and the spread of Roman Catholicism during the medieval period?",
        choices: [
          "A", "Orthodox missionaries adapted texts into local vernacular languages, while Catholicism generally required the use of Latin in liturgy",
          "B", "Roman Catholicism rejected all forms of monasticism, while Orthodox Christianity was spread exclusively by monks",
          "C", "Orthodox Christianity was imposed by military force, while Catholicism spread solely through peaceful persuasion",
          "D", "Catholicism was confined to the Italian peninsula while Orthodoxy dominated all of Europe"
        ],
        answer: "A"
      },
      {
        num: 11,
        set: 1,
        stem: "The decline and fall of the Byzantine Empire between 1200 and 1453 was most directly caused by which combination of factors?",
        choices: [
          "A", "Volcanic eruptions and tsunamis that destroyed Constantinople's harbor",
          "B", "The adoption of Islam by the Byzantine ruling elite and subsequent civil war",
          "C", "Internal political instability, the devastation of the Fourth Crusade, and sustained Ottoman military pressure",
          "D", "A complete economic collapse caused by the discovery of the Americas"
        ],
        answer: "C"
      },
      // SET 2 — Questions 12-22: Mughal Empire & Religious Syncretism (c. 1450-1750)
      {
        num: 12,
        set: 2,
        stem: "Akbar's abolition of the jizya and appointment of Hindu Rajput warriors to senior positions most directly served which of the following purposes?",
        choices: [
          "A", "Converting the Hindu population to Islam through incentives rather than coercion",
          "B", "Building a broad base of political support by incorporating non-Muslim elites into the imperial administration",
          "C", "Weakening the power of the Muslim ulama by replacing them with Hindu advisors",
          "D", "Preparing the Mughal Empire for a military alliance with the Portuguese"
        ],
        answer: "B"
      },
      {
        num: 13,
        set: 2,
        stem: "Akbar's Din-i-Ilahi is best understood as an attempt to accomplish which of the following?",
        choices: [
          "A", "Impose a single monotheistic religion on all subjects of the Mughal Empire by force",
          "B", "Restore orthodox Sunni Islam as the sole faith of the Mughal court",
          "C", "Adopt Christianity as the official religion of the Mughal Empire following contact with Jesuit missionaries",
          "D", "Synthesize elements of multiple religious traditions into an eclectic spiritual philosophy centered on the emperor"
        ],
        answer: "D"
      },
      {
        num: 14,
        set: 2,
        stem: "The Taj Mahal is most significant as a historical artifact because it demonstrates which of the following?",
        choices: [
          "A", "The Mughal Empire's rejection of all non-Islamic artistic influences",
          "B", "The synthesis of Persian, Central Asian, and Indian architectural traditions under Mughal patronage",
          "C", "The dominance of European architectural styles in South Asian construction",
          "D", "The decline of artistic production during the Mughal period"
        ],
        answer: "B"
      },
      {
        num: 15,
        set: 2,
        stem: "Aurangzeb's reimposition of the jizya and destruction of Hindu temples represented a significant departure from Akbar's policies primarily because it accomplished which of the following?",
        choices: [
          "A", "Strengthened the loyalty of Hindu subjects to the Mughal throne",
          "B", "Encouraged the rapid conversion of the entire Hindu population to Islam",
          "C", "Alienated non-Muslim communities and fueled resistance movements such as the Marathas and Sikhs",
          "D", "Unified all religious groups in the empire under a shared sense of Mughal identity"
        ],
        answer: "C"
      },
      {
        num: 16,
        set: 2,
        stem: "The emergence of Sikhism as a distinct religion in South Asia was most directly influenced by which of the following historical contexts?",
        choices: [
          "A", "European colonial missionaries introducing Protestant Christianity to the Punjab region",
          "B", "The complete isolation of the Punjab region from broader South Asian cultural developments",
          "C", "The revival of ancient Buddhist teachings by Mughal court scholars",
          "D", "The interaction between Hindu devotional (bhakti) traditions and Islamic Sufi mysticism in northern India"
        ],
        answer: "D"
      },
      {
        num: 17,
        set: 2,
        stem: "The transformation of the Sikh community from a pacifist religious movement into a military force under Guru Gobind Singh was most directly a response to which of the following?",
        choices: [
          "A", "Mughal persecution under Aurangzeb, including the execution of Guru Tegh Bahadur",
          "B", "A theological revelation requiring all Sikhs to pursue military careers",
          "C", "British colonial policies that conscripted Sikhs into the Indian Army",
          "D", "An alliance with the Maratha Confederacy that required military participation"
        ],
        answer: "A"
      },
      {
        num: 18,
        set: 2,
        stem: "A historian comparing the religious policies of Akbar and Aurangzeb would most likely conclude which of the following?",
        choices: [
          "A", "Both emperors pursued identical policies of religious tolerance throughout their reigns",
          "B", "The shift from Akbar's inclusivism to Aurangzeb's orthodoxy illustrates how different rulers within the same dynasty could pursue fundamentally different approaches to governing a religiously diverse empire",
          "C", "Aurangzeb's policies were more successful than Akbar's in maintaining imperial unity",
          "D", "Religious policy had no significant impact on the political stability of the Mughal Empire"
        ],
        answer: "B"
      },
      {
        num: 19,
        set: 2,
        stem: "The fragmentation of the Mughal Empire in the early eighteenth century most closely parallels which of the following developments in another region?",
        choices: [
          "A", "The unification of Japan under the Tokugawa shogunate",
          "B", "The expansion of the Qing Dynasty into Central Asia",
          "C", "The decline of the Ottoman Empire as provincial governors and regional powers asserted increasing autonomy",
          "D", "The consolidation of power by Louis XIV of France"
        ],
        answer: "C"
      },
      {
        num: 20,
        set: 2,
        stem: "The growing influence of European trading companies in India during the Mughal Empire's decline most directly foreshadowed which of the following developments?",
        choices: [
          "A", "The establishment of British colonial rule over the Indian subcontinent",
          "B", "The complete withdrawal of European merchants from Asian trade networks",
          "C", "The reunification of India under a restored Mughal dynasty",
          "D", "The adoption of Mughal administrative practices by European colonial governments in the Americas"
        ],
        answer: "A"
      },
      {
        num: 21,
        set: 2,
        stem: "Akbar's interfaith debates at his court are most directly comparable to which of the following practices in other early modern empires?",
        choices: [
          "A", "The Spanish Inquisition's prosecution of religious dissenters",
          "B", "The Tokugawa shogunate's persecution of Japanese Christians",
          "C", "The Ottoman millet system, which granted religious communities a degree of self-governance",
          "D", "The Qing Dynasty's complete suppression of all non-Confucian religions"
        ],
        answer: "C"
      },
      {
        num: 22,
        set: 2,
        stem: "Which of the following best explains why Mughal India attracted extensive European commercial interest during the sixteenth and seventeenth centuries?",
        choices: [
          "A", "India's textile, spice, and luxury goods production made it a key source of high-value commodities desired in European markets",
          "B", "European merchants sought to convert India's population to Christianity through trade contacts",
          "C", "India lacked any domestic manufacturing capacity and depended entirely on European imports",
          "D", "The Mughal emperors actively recruited European settlers to populate underdeveloped regions"
        ],
        answer: "A"
      },
      // SET 3 — Questions 23-33: Haitian Revolution & Atlantic Abolition (c. 1750-1900)
      {
        num: 23,
        set: 3,
        stem: "The Haitian Revolution is most historically significant because it demonstrated which of the following?",
        choices: [
          "A", "The impossibility of enslaved people organizing effective military resistance",
          "B", "That Enlightenment ideals of liberty and equality could be claimed and realized by enslaved people of African descent",
          "C", "The willingness of European colonial powers to voluntarily abolish slavery",
          "D", "The superiority of plantation agriculture over free labor systems"
        ],
        answer: "B"
      },
      {
        num: 24,
        set: 3,
        stem: "The Code Noir's regulation of slavery in French colonies most directly reveals which of the following about the nature of Atlantic slavery?",
        choices: [
          "A", "Enslaved people enjoyed extensive legal protections that prevented abuse",
          "B", "The French government was unaware of conditions on Caribbean plantations",
          "C", "Slavery in French colonies was significantly more humane than in British or Spanish colonies",
          "D", "Even legal frameworks ostensibly governing slavery failed to prevent widespread violence and exploitation"
        ],
        answer: "D"
      },
      {
        num: 25,
        set: 3,
        stem: "Toussaint Louverture's military victories against French, Spanish, and British forces are best explained by which of the following factors?",
        choices: [
          "A", "Toussaint's strategic brilliance, the determination of formerly enslaved fighters, and the devastating impact of tropical diseases on European armies",
          "B", "Massive military aid from the United States government",
          "C", "Superior European-manufactured weapons supplied by anti-slavery organizations",
          "D", "A formal alliance between Haiti and the Qing Dynasty of China"
        ],
        answer: "A"
      },
      {
        num: 26,
        set: 3,
        stem: "Napoleon's decision to send an expedition to Saint-Domingue to restore slavery most directly reflected which of the following?",
        choices: [
          "A", "Napoleon's commitment to Enlightenment ideals of universal human rights",
          "B", "The economic importance of Caribbean sugar colonies to the French economy and Napoleon's desire to reassert imperial control",
          "C", "France's intention to establish a permanent military alliance with Haiti",
          "D", "Napoleon's personal admiration for Toussaint Louverture's leadership"
        ],
        answer: "B"
      },
      {
        num: 27,
        set: 3,
        stem: "The reaction of slaveholding societies in the United States, Cuba, and Brazil to the Haitian Revolution most directly demonstrated which of the following?",
        choices: [
          "A", "Widespread support among slaveholders for the immediate abolition of slavery",
          "B", "The belief that the Haitian Revolution was irrelevant to other slave societies",
          "C", "Fear that the example of a successful slave revolt could inspire similar uprisings elsewhere",
          "D", "Slaveholders' confidence that their own enslaved populations were entirely content"
        ],
        answer: "C"
      },
      {
        num: 28,
        set: 3,
        stem: "Britain's abolition of the slave trade in 1807 was most directly driven by which combination of factors?",
        choices: [
          "A", "Pressure from enslaved people who petitioned Parliament directly for abolition",
          "B", "A sudden collapse in the global demand for sugar and cotton",
          "C", "Military threats from the Haitian government against British shipping",
          "D", "Humanitarian campaigning, economic arguments favoring free labor, and the example of the Haitian Revolution demonstrating the unsustainability of slavery"
        ],
        answer: "D"
      },
      {
        num: 29,
        set: 3,
        stem: "Simón Bolívar's acceptance of Haitian material support in exchange for promising to abolish slavery most directly illustrates which of the following connections?",
        choices: [
          "A", "The linkage between anti-colonial nationalism and the broader Atlantic struggle against slavery",
          "B", "The complete separation of abolition movements from Latin American independence struggles",
          "C", "Bolívar's desire to establish a monarchy modeled on the Haitian government",
          "D", "Haiti's intention to colonize South America"
        ],
        answer: "A"
      },
      {
        num: 30,
        set: 3,
        stem: "Which of the following best explains why the Haitian Revolution did NOT immediately lead to the abolition of slavery throughout the Americas?",
        choices: [
          "A", "The Haitian Revolution was unknown outside of the Caribbean region",
          "B", "Slaveholding elites in other nations strengthened legal and military mechanisms to preserve slavery, and the economic profitability of slave-produced commodities remained high",
          "C", "Enslaved people in other regions had no knowledge of or interest in emancipation",
          "D", "The Haitian Revolution restored slavery after a brief period of emancipation"
        ],
        answer: "B"
      },
      {
        num: 31,
        set: 3,
        stem: "The role of William Wilberforce in the British abolition movement best illustrates which of the following aspects of reform in the period 1750-1900?",
        choices: [
          "A", "The complete irrelevance of religious motivations to social and political reform movements",
          "B", "The inability of individual activists to influence government policy on major social issues",
          "C", "The capacity of sustained parliamentary advocacy, rooted in evangelical Christian beliefs, to achieve significant legislative change",
          "D", "The dominance of economic interests over all moral considerations in British political life"
        ],
        answer: "C"
      },
      {
        num: 32,
        set: 3,
        stem: "The French Revolution's Declaration of the Rights of Man and Citizen (1789) created a contradiction with the institution of slavery primarily because it stated which of the following?",
        choices: [
          "A", "All men are born and remain free and equal in rights",
          "B", "Only French citizens living in metropolitan France are entitled to legal protections",
          "C", "Slavery is a natural and permanent institution that cannot be abolished",
          "D", "Colonial territories are not subject to French law"
        ],
        answer: "A"
      },
      {
        num: 33,
        set: 3,
        stem: "The long-term economic consequences of the Haitian Revolution for the newly independent nation included which of the following?",
        choices: [
          "A", "Rapid industrialization that made Haiti one of the wealthiest nations in the Caribbean",
          "B", "Immediate international recognition and favorable trade agreements with European powers",
          "C", "The establishment of a diversified economy based on manufacturing and technology",
          "D", "Diplomatic isolation, crippling indemnity payments to France, and persistent economic underdevelopment"
        ],
        answer: "D"
      },
      // SET 4 — Questions 34-44: Chinese Revolution & Mao's China (c. 1900-present)
      {
        num: 34,
        set: 4,
        stem: "The May Fourth Movement of 1919 was most directly triggered by which of the following events?",
        choices: [
          "A", "The outbreak of the Chinese Civil War between Nationalists and Communists",
          "B", "China's humiliation at the Treaty of Versailles, which transferred German concessions in Shandong to Japan",
          "C", "The Japanese invasion of Manchuria and establishment of the puppet state of Manchukuo",
          "D", "The success of the Bolshevik Revolution in Russia, which inspired Chinese workers to seize factories"
        ],
        answer: "B"
      },
      {
        num: 35,
        set: 4,
        stem: "The May Fourth Movement's calls for modernization and democracy most closely paralleled which of the following movements in other regions?",
        choices: [
          "A", "The Young Turk movement's demand for constitutional reform in the Ottoman Empire",
          "B", "The Luddite movement's destruction of industrial machinery in England",
          "C", "The Counter-Reformation's reassertion of Catholic doctrinal authority",
          "D", "The Romantic movement's rejection of Enlightenment rationalism in Western Europe"
        ],
        answer: "A"
      },
      {
        num: 36,
        set: 4,
        stem: "The Long March of 1934-1935 is most significant in the history of the Chinese Communist revolution because it accomplished which of the following?",
        choices: [
          "A", "Resulted in the immediate defeat of Chiang Kai-shek's Nationalist forces",
          "B", "Led to a formal alliance between the CCP and the United States against Japan",
          "C", "Demonstrated the complete failure of Communist ideology to attract popular support in China",
          "D", "Established Mao Zedong's leadership within the CCP and forged a hardened revolutionary movement"
        ],
        answer: "D"
      },
      {
        num: 37,
        set: 4,
        stem: "The catastrophic famine resulting from the Great Leap Forward most directly illustrates which of the following dangers of centralized economic planning?",
        choices: [
          "A", "The inability of communist governments to organize any form of agricultural production",
          "B", "The tendency of ideologically driven policies to override practical economic realities, with devastating human consequences",
          "C", "The success of collectivized agriculture in meeting the nutritional needs of the Chinese population",
          "D", "The complete absence of industrial growth during the period of the Great Leap Forward"
        ],
        answer: "B"
      },
      {
        num: 38,
        set: 4,
        stem: "Mao's Cultural Revolution is best understood as an attempt to accomplish which of the following?",
        choices: [
          "A", "Promote Western liberal democratic values among Chinese youth",
          "B", "Restore traditional Confucian social hierarchies and respect for elders",
          "C", "Eliminate perceived ideological enemies and reassert Mao's authority by mobilizing the masses against the party establishment and traditional culture",
          "D", "Open China to foreign investment and international trade"
        ],
        answer: "C"
      },
      {
        num: 39,
        set: 4,
        stem: "The Red Guards' targeting of intellectuals, artists, and party officials during the Cultural Revolution most closely parallels which of the following historical events?",
        choices: [
          "A", "The Reign of Terror during the French Revolution, in which perceived enemies of the revolution were persecuted",
          "B", "The Meiji Restoration's modernization of Japanese education and industry",
          "C", "The Marshall Plan's reconstruction of Western Europe after World War II",
          "D", "The Green Revolution's introduction of modern agricultural techniques in developing nations"
        ],
        answer: "A"
      },
      {
        num: 40,
        set: 4,
        stem: "Deng Xiaoping's market-oriented economic reforms after Mao's death represented which of the following shifts in Chinese governance?",
        choices: [
          "A", "A complete transition to Western-style liberal democracy with multiparty elections",
          "B", "A return to the policies of the Great Leap Forward and collectivized agriculture",
          "C", "The introduction of market mechanisms and private enterprise while maintaining the political monopoly of the Chinese Communist Party",
          "D", "The reunification of mainland China with Taiwan under a single government"
        ],
        answer: "C"
      },
      {
        num: 41,
        set: 4,
        stem: "Mao Zedong's strategy of basing the Chinese Communist revolution on the peasantry rather than the urban proletariat represented a significant departure from which of the following?",
        choices: [
          "A", "Classical Marxist theory, which identified the industrial working class as the revolutionary vanguard",
          "B", "Sun Yat-sen's Three Principles of the People",
          "C", "The Confucian emphasis on social harmony and filial piety",
          "D", "Japanese models of rapid industrialization through state-directed capitalism"
        ],
        answer: "A"
      },
      {
        num: 42,
        set: 4,
        stem: "The closure of schools and universities during the Cultural Revolution had which of the following long-term consequences for Chinese society?",
        choices: [
          "A", "It produced a generation of highly educated revolutionary leaders",
          "B", "It had no measurable impact on China's economic or intellectual development",
          "C", "It led to the immediate establishment of a Western-style university system in China",
          "D", "It created a 'lost generation' of Chinese citizens who were denied formal education during their formative years"
        ],
        answer: "D"
      },
      {
        num: 43,
        set: 4,
        stem: "Which of the following best explains why the CCP ultimately defeated the Nationalists in the Chinese Civil War by 1949?",
        choices: [
          "A", "The CCP received direct military intervention from the Soviet Red Army throughout the civil war",
          "B", "CCP land reform policies won peasant support, while Nationalist corruption and military failures eroded their legitimacy",
          "C", "The Nationalists voluntarily surrendered power to avoid further bloodshed",
          "D", "The United States withdrew all support from the Nationalists and recognized the CCP"
        ],
        answer: "B"
      },
      {
        num: 44,
        set: 4,
        stem: "The founding of the People's Republic of China in 1949 most directly affected the Cold War by accomplishing which of the following?",
        choices: [
          "A", "Ending the Cold War by creating a neutral third power bloc",
          "B", "Leading to an immediate military alliance between China and the United States against the Soviet Union",
          "C", "Dramatically expanding the territory under Communist governance and intensifying Western fears of Communist expansion in Asia",
          "D", "Causing the Soviet Union to abandon communism in favor of capitalist economic policies"
        ],
        answer: "C"
      },
      // SET 5 — Questions 45-55: Environmental History & Human Impact (c. 1200-present)
      {
        num: 45,
        set: 5,
        stem: "Medieval European deforestation was most directly driven by which of the following factors?",
        choices: [
          "A", "Agricultural expansion to feed growing populations and demand for timber for construction and fuel",
          "B", "Government-mandated conservation policies that encouraged the clearing of old-growth forests",
          "C", "The desire to create national parks and protected wilderness areas",
          "D", "The introduction of invasive plant species from the Americas that replaced native forests"
        ],
        answer: "A"
      },
      {
        num: 46,
        set: 5,
        stem: "The hypothesis that reforestation of abandoned farmland in the Americas after 1492 contributed to the Little Ice Age most directly connects which of the following historical processes?",
        choices: [
          "A", "The Columbian Exchange's demographic catastrophe among indigenous peoples and global climate patterns",
          "B", "The expansion of the Atlantic slave trade and rising sea levels",
          "C", "The Scientific Revolution and the development of accurate temperature measurement",
          "D", "The Protestant Reformation and changes in European agricultural practices"
        ],
        answer: "A"
      },
      {
        num: 47,
        set: 5,
        stem: "The transition from wood and water power to coal during the Industrial Revolution is most significant in environmental history because it initiated which of the following?",
        choices: [
          "A", "The complete elimination of deforestation in industrialized nations",
          "B", "A fundamental shift to fossil fuel dependence that would drive unprecedented increases in atmospheric carbon dioxide",
          "C", "A decline in global industrial production due to the limited availability of coal reserves",
          "D", "The immediate recognition by governments that fossil fuels posed environmental risks"
        ],
        answer: "B"
      },
      {
        num: 48,
        set: 5,
        stem: "Norman Borlaug's Green Revolution is best characterized as having which of the following dual consequences?",
        choices: [
          "A", "It failed to increase food production but successfully reduced environmental damage in developing nations",
          "B", "It had no measurable impact on either food production or environmental conditions",
          "C", "It exclusively benefited wealthy industrialized nations while worsening food insecurity in developing countries",
          "D", "It dramatically increased crop yields and averted predicted famines while causing environmental damage through chemical inputs and resource depletion"
        ],
        answer: "D"
      },
      {
        num: 49,
        set: 5,
        stem: "The Kyoto Protocol (1997) and the Paris Agreement (2015) most directly reflected which of the following realities of global environmental governance?",
        choices: [
          "A", "Individual nations can effectively address climate change without international coordination",
          "B", "The scientific consensus on climate change remains highly contested among environmental researchers",
          "C", "International cooperation on emissions reduction is necessary but difficult to implement uniformly across nations with different economic interests",
          "D", "All nations immediately and fully complied with emissions reduction targets set by these agreements"
        ],
        answer: "C"
      },
      {
        num: 50,
        set: 5,
        stem: "The Little Ice Age's impact on European societies between 1300 and 1850 most closely parallels which of the following environmental challenges?",
        choices: [
          "A", "The impact of desertification on Saharan trade routes in the modern era",
          "B", "The environmental effects of nuclear testing during the Cold War",
          "C", "The depletion of the ozone layer by chlorofluorocarbons in the late twentieth century",
          "D", "The impact of anthropogenic climate change on global agriculture and food security in the twenty-first century"
        ],
        answer: "D"
      },
      {
        num: 51,
        set: 5,
        stem: "A historian studying environmental change would most likely argue that the period since 1750 is distinct from earlier eras primarily because of which of the following?",
        choices: [
          "A", "Humans had no impact on the natural environment before the Industrial Revolution",
          "B", "The scale, speed, and global reach of human environmental impact increased dramatically with industrialization and fossil fuel use",
          "C", "Environmental damage was more severe in the medieval period than in the industrial era",
          "D", "International environmental agreements effectively prevented all environmental degradation after 1750"
        ],
        answer: "B"
      },
      {
        num: 52,
        set: 5,
        stem: "The relationship between the Columbian Exchange and environmental change in the Americas after 1492 is best described by which of the following?",
        choices: [
          "A", "European colonization had no measurable environmental impact on the Americas",
          "B", "Indigenous American agricultural practices were entirely replaced by superior European farming methods",
          "C", "The introduction of European livestock, crops, and diseases transformed American ecosystems and landscapes, while the catastrophic decline of indigenous populations allowed forests to regenerate on abandoned farmland",
          "D", "The Columbian Exchange exclusively involved the transfer of plant species from the Americas to Europe"
        ],
        answer: "C"
      },
      {
        num: 53,
        set: 5,
        stem: "Critics of the Green Revolution would most likely emphasize which of the following arguments?",
        choices: [
          "A", "The Green Revolution successfully solved all problems of global hunger without any negative side effects",
          "B", "High-yield crop varieties required expensive chemical inputs that many small farmers could not afford, increasing economic inequality",
          "C", "The Green Revolution had no measurable impact on crop yields in any region",
          "D", "Traditional farming methods were entirely superior to modern agricultural techniques in every respect"
        ],
        answer: "B"
      },
      {
        num: 54,
        set: 5,
        stem: "The uneven implementation of the Paris Agreement most directly reflects which of the following tensions in contemporary global politics?",
        choices: [
          "A", "The complete absence of scientific evidence linking human activity to climate change",
          "B", "Universal agreement among all nations that immediate deindustrialization is the only solution to climate change",
          "C", "The irrelevance of economic considerations to environmental policymaking",
          "D", "Conflict between developing nations seeking economic growth through industrialization and the global need to reduce greenhouse gas emissions"
        ],
        answer: "D"
      },
      {
        num: 55,
        set: 5,
        stem: "Which of the following best characterizes the overall trajectory of human-environment interaction as described in the passage?",
        choices: [
          "A", "Human impact on the environment has remained constant throughout history, with no significant changes in scale or intensity",
          "B", "Environmental change has been driven exclusively by natural forces, with no significant human contribution",
          "C", "Human environmental impact has accelerated over time, from localized deforestation in the medieval period to global-scale climate change in the industrial and post-industrial eras",
          "D", "Modern technology has completely reversed all forms of environmental damage caused by human activity"
        ],
        answer: "C"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, Al-Idrisi's world map & Islamic geography
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Al-Idrisi's World Map & Islamic Geography",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Al-Idrisi, Tabula Rogeriana (Book of Pleasant Journeys into Faraway Lands), 1154",
            description: "Muhammad al-Idrisi was an Arab geographer and cartographer who worked at the court of Roger II, the Norman king of Sicily. He compiled geographical knowledge from Greek, Arabic, and contemporary traveler sources to produce one of the most advanced world maps of the medieval period. The following is an adapted excerpt from his accompanying text.",
            text: "I have gathered in this book descriptions of all the regions of the earth that are known to scholars and travelers, drawing upon the works of Ptolemy and al-Khwarizmi, and upon the reports of merchants, sailors, and pilgrims who have journeyed to distant lands. The inhabited earth extends from the western ocean to the farthest lands of China, and from the equatorial regions of Africa to the frozen lands of the north. The great sea that lies between Africa and the land of the Franks is navigable, and its shores are home to prosperous cities engaged in commerce. The lands of the Sudan produce gold in abundance, which is carried northward across the great desert by caravans. India and China are rich in spices, silk, and porcelain, which reach the markets of Egypt and Syria through the sea routes of the Indian Ocean. I have endeavored to represent these lands and sea routes with the greatest accuracy, correcting the errors of earlier geographers where the reports of reliable travelers have shown them to be mistaken."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way the source illustrates the extent of geographic knowledge in the Islamic world during the twelfth century." },
          { letter: "B", prompt: "Explain ONE way in which al-Idrisi's work reflects the broader pattern of cross-cultural exchange in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE way in which the context in which al-Idrisi produced this work — at the court of a Norman Christian king — might affect its content or perspective." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an example such as the synthesis of knowledge from Greek, Arabic, and contemporary sources spanning from West Africa to China, the depiction of transcontinental trade routes, or the correction of earlier geographic errors through empirical traveler reports." },
          { row: "B", category: "Part B", points: 1, description: "Explains a pattern such as the role of Islamic scholars in preserving and synthesizing Greek and Roman knowledge, the facilitation of knowledge transfer along trade routes connecting Africa, Europe, and Asia, or the cosmopolitan intellectual culture of courts that drew on diverse cultural traditions." },
          { row: "C", category: "Part C", points: 1, description: "Explains a contextual factor such as the multicultural nature of Norman Sicily requiring a work that synthesized Christian and Islamic geographic knowledge, potential bias toward emphasizing trade routes relevant to Sicilian commerce, or the patronage relationship potentially influencing the representation of Christian lands." }
        ]
      },
      // SAQ 2 — Secondary source, partition of India
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — The Partition of India (1947)",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Yasmin Khan, The Great Partition: The Making of India and Pakistan (2007)",
            description: "Yasmin Khan is a British historian of South Asian descent who has written extensively about the end of British colonial rule in India. This excerpt is from her study of the partition of British India into the independent states of India and Pakistan in 1947.",
            text: "The partition of India in August 1947 was accompanied by one of the largest and most violent mass migrations in human history. An estimated 10 to 20 million people were displaced as Hindus and Sikhs fled from areas that became Pakistan and Muslims fled from areas that became India. Communal violence claimed the lives of between 200,000 and two million people — the exact figures remain disputed. The boundary lines, drawn hastily by British lawyer Cyril Radcliffe, who had never visited India before, divided communities, families, and economic regions that had been integrated for centuries. The tragedy of partition cannot be attributed to a single cause: the legacy of British colonial divide-and-rule policies, the hardening of Hindu and Muslim communal identities in the early twentieth century, the intransigence of political leaders on both sides, and the speed with which the British withdrew all contributed to the catastrophe. The trauma of partition continues to shape the politics and national identities of India and Pakistan to this day."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE cause of the partition of India identified in the source." },
          { letter: "B", prompt: "Explain ONE way that the partition of India affected the political or social development of South Asia after 1947." },
          { letter: "C", prompt: "Explain ONE way that the legacy of European colonialism contributed to ethnic or religious conflict in ANOTHER region of the world during the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a cause such as British divide-and-rule policies, the hardening of Hindu-Muslim communal identities, political intransigence by leaders, or the hasty and arbitrary drawing of boundaries by Cyril Radcliffe." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the creation of enduring India-Pakistan rivalry and multiple wars, the displacement of millions of refugees, the shaping of national identities around religious difference, or the ongoing conflict over Kashmir." },
          { row: "C", category: "Part C", points: 1, description: "Explains a parallel such as the Rwandan genocide fueled by colonial-era Belgian classification of Hutu and Tutsi identities, the Israeli-Palestinian conflict rooted in British Mandate policies, or sectarian conflict in Iraq stemming from colonial-era boundaries that grouped diverse communities." }
        ]
      },
      // SAQ 3 — No stimulus, spread of Buddhism across East and Southeast Asia (c. 1200-1450)
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Spread of Buddhism Across East and Southeast Asia (c. 1200-1450)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that Buddhism spread to or was practiced in a specific East or Southeast Asian society in the period c. 1200-1450." },
          { letter: "B", prompt: "Explain ONE way that the adoption of Buddhism affected the political or cultural development of a specific East or Southeast Asian society in the period c. 1200-1450." },
          { letter: "C", prompt: "Explain ONE way that the spread of Buddhism in East and Southeast Asia during this period was similar to OR different from the spread of another world religion in a different region." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific example such as Theravada Buddhism becoming the dominant religion in the Khmer Empire, the influence of Zen Buddhism on Japanese warrior culture, the role of Buddhist monasteries in educating the population of mainland Southeast Asia, or the patronage of Buddhist temples by the Yuan Dynasty." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the construction of temple complexes like Angkor Wat (originally Hindu, later Buddhist), the influence of Buddhist concepts on Japanese art and aesthetics, the role of Buddhist monks as advisors to Southeast Asian rulers, or the use of Buddhism to legitimize political authority." },
          { row: "C", category: "Part C", points: 1, description: "Explains a similarity or difference such as comparing the spread of Buddhism through trade and missionary activity to the spread of Islam along Indian Ocean trade routes, or contrasting the generally peaceful spread of Buddhism with the military conquests associated with the spread of Christianity during the Crusades." }
        ]
      },
      // SAQ 4 — No stimulus, impact of the Cold War on Latin America (c. 1945-1990)
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Impact of the Cold War on Latin America (c. 1945-1990)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that Cold War superpower competition directly affected the political development of a specific Latin American country in the period c. 1945-1990." },
          { letter: "B", prompt: "Explain ONE way that United States foreign policy toward Latin America during the Cold War reflected broader Cold War ideological concerns." },
          { letter: "C", prompt: "Explain ONE way that Cold War interventions in Latin America had lasting consequences for the region after 1990." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a specific example such as the CIA-backed coup in Guatemala (1954), the Cuban Revolution and Bay of Pigs invasion, US support for the overthrow of Salvador Allende in Chile (1973), or US funding of Contra rebels in Nicaragua during the 1980s." },
          { row: "B", category: "Part B", points: 1, description: "Explains a connection such as the US policy of containing communism by supporting anti-communist regimes regardless of their human rights records, the use of economic aid and military intervention to prevent the spread of Soviet influence, or the framing of Latin American reform movements as communist threats." },
          { row: "C", category: "Part C", points: 1, description: "Explains a lasting consequence such as enduring distrust of US foreign policy in the region, the legacy of authoritarian rule and human rights abuses committed by US-backed regimes, ongoing economic inequality linked to Cold War-era development policies, or the persistence of political polarization between left-wing and right-wing movements." }
        ]
      },
      // DBQ — Epidemic diseases and political/economic/social structures in Afro-Eurasia (c. 1200-1500)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which the spread of epidemic diseases affected political, economic, and/or social structures in Afro-Eurasia in the period circa 1200-1500.",
        documents: [
          {
            num: 1,
            source: "Giovanni Boccaccio, The Decameron, 1353",
            figureId: "sim5-dbq-doc1-black-death-flagellants",
            text: "In the year of our Lord 1348, the deadly pestilence arrived in the magnificent city of Florence. The plague showed no respect for rank or station — it struck down nobles and commoners, rich and poor alike. So many died that the customary funeral rites could not be observed. Corpses were piled in the streets, and gravediggers demanded enormous sums to carry the dead to burial. Servants abandoned their masters, and members of families fled from their own sick relatives. The bonds of human society seemed to dissolve entirely. Many believed the end of the world had arrived and abandoned all restraint, indulging in pleasure while they still could, since tomorrow they might be dead."
          },
          {
            num: 2,
            source: "Ibn Khaldun, Muqaddimah (Introduction to History), 1377",
            text: "Civilization in both the East and the West was visited by a destructive plague which devastated nations and caused populations to vanish. It swallowed up many of the good things of civilization and wiped them out. The entire inhabited world changed. The East, in particular, was destroyed. The dynasty of the descendants of the Abbasids in Iraq was decimated. So too were the kingdoms of Persia and the lands of India. Chinese civilization suffered destruction as well. The cities of the Maghreb were depopulated, and their crafts and industries declined. When there is a general change of conditions, it is as if the entire creation had changed and the whole world been altered."
          },
          {
            num: 3,
            source: "English statute, Ordinance of Labourers, 1349",
            text: "Because a great part of the people, and especially of workmen and servants, late died of the pestilence, many seeing the necessity of masters, and great scarcity of servants, will not serve unless they may receive excessive wages, and some are rather willing to beg in idleness than by labour to get their living; We, considering the grievous incommodities which of the lack especially of ploughmen and such labourers may hereafter come, do ordain that every man and woman of our realm of England, of whatsoever condition, free or bond, able in body and within the age of sixty years, shall be bound to serve at the wages which were accustomed to be given five or six years before the pestilence."
          },
          {
            num: 4,
            source: "Al-Maqrizi, Egyptian historian, account of the plague in Egypt, c. 1430",
            text: "The plague struck Egypt repeatedly throughout the fourteenth and fifteenth centuries. After each outbreak, the price of grain rose sharply because so many agricultural laborers had perished that insufficient crops were harvested. The great irrigation works of the Nile Valley fell into disrepair, as there were too few workers to maintain the canals and dikes upon which Egyptian agriculture depended. Entire villages were abandoned, and the sultan's tax revenues declined drastically. The Mamluk government found itself unable to maintain its army at full strength, as both soldiers and the taxpayers who funded them had been carried off by the pestilence."
          },
          {
            num: 5,
            source: "Chronicle of Novgorod, Russian monastic chronicle, 1352",
            text: "In the year 1352, there was a great plague in Pskov and in Novgorod and throughout all the Russian land. The people died in such great numbers that the living could not bury the dead. In Pskov, the priests could not keep up with the burials; they dug great pits and laid the dead in them by the hundreds. The people, being in great fear, turned to the Church and begged the Archbishop for mercy. Many abandoned their homes and fled into the forests, but the plague followed them there as well. Trade ceased, for merchants dared not travel, and the markets stood empty."
          },
          {
            num: 6,
            source: "Jean de Venette, French Carmelite friar, chronicle, c. 1360",
            text: "After the pestilence had passed, the surviving laborers would not work for the accustomed wages. A ploughman who had formerly been content with two pence a day now demanded six or eight, and a servant girl who would have worked for a year's room and board now insisted upon twelve shillings. The common people, who before the plague had been humble and obedient, now showed great insolence toward their betters. Many of the lesser nobles found themselves unable to cultivate their estates, for no workers could be found at any price. The world seemed turned upside down."
          },
          {
            num: 7,
            source: "Modern historian William McNeill, Plagues and Peoples, 1976",
            text: "The Black Death of the fourteenth century was carried along the Mongol trade routes that connected China, Central Asia, the Middle East, and Europe. The bacterium Yersinia pestis, transmitted by fleas living on rats, spread with devastating efficiency along the very commercial networks that had facilitated the exchange of goods, technologies, and ideas during the Pax Mongolica. The pandemic killed an estimated one-third of Europe's population and caused comparable devastation across the Islamic world and Central Asia. The demographic catastrophe undermined the feudal labor system in Western Europe, contributed to the weakening of the Mongol successor states, and disrupted established patterns of trade and governance across Afro-Eurasia for generations."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — Labor systems across periods
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, evaluate the extent to which coerced labor systems shaped the economies of states in Afro-Eurasia." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which new labor systems developed in response to the expansion of global trade networks." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which industrialization transformed labor practices and the lives of working people." }
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
  {
    id: "sim6",
    label: "Practice Simulation 6",
    description: "Full-length AP World History: Modern exam — 55 MC + SAQ + DBQ + LEQ",
    badge: "Practice",
    year: 2025,
    totalMCTime: 3300,
    mcSets: [
      {
        id: "set1",
        setNum: 1,
        figureId: "sim6-set1-mansa-musa-pilgrimage",
        title: "Set 1 — West African Kingdoms: Ghana, Mali, and Songhai (c. 1200-1450)",
        passage: "West Africa between roughly 750 and 1600 CE produced a succession of powerful states whose wealth rested upon control of the trans-Saharan gold-salt trade. The Ghana Empire (c. 750-1076), centered in the Sahel region between the Sahara Desert and the West African forests, grew rich by taxing gold traveling northward and salt traveling southward. After Ghana's decline, the Mali Empire (c. 1235-1460) rose under Sundiata Keita, who consolidated Mande-speaking peoples into a vast state. Mali's most celebrated ruler, Mansa Musa (r. 1312-1337), undertook a famous pilgrimage to Mecca in 1324-1325, distributing so much gold along the way that he reportedly depressed the price of gold in Cairo for over a decade. Mansa Musa established Timbuktu as a major center of Islamic learning, attracting scholars from across the Muslim world to its Sankore Mosque and university. The Songhai Empire (c. 1464-1591) succeeded Mali as the dominant West African state. Under Sunni Ali (r. 1464-1492) and Askia Muhammad (r. 1493-1528), Songhai expanded along the Niger River, developing a sophisticated bureaucracy with provincial governors, a professional army, and an elaborate system of Islamic courts. Askia Muhammad promoted Islamic scholarship and standardized weights and measures to facilitate trade. The Songhai Empire fell in 1591 when Moroccan forces equipped with firearms — a military technology not yet widespread in sub-Saharan Africa — crossed the Sahara and defeated the Songhai army at the Battle of Tondibi, demonstrating the growing importance of gunpowder weaponry in determining the balance of power."
      },
      {
        id: "set2",
        setNum: 2,
        title: "Set 2 — The Russian Empire: Peter the Great through Catherine the Great (c. 1450-1750)",
        passage: "Russia's transformation from a landlocked Muscovite principality into a vast Eurasian empire represents one of the most dramatic state-building enterprises of the early modern period. Ivan III (r. 1462-1505) threw off Mongol suzerainty and proclaimed Moscow the 'Third Rome,' heir to the Byzantine legacy after Constantinople's fall. Ivan IV ('the Terrible,' r. 1547-1584) expanded Russian territory into Siberia by sponsoring Cossack expeditions under Yermak, while simultaneously terrorizing the Russian nobility (boyars) through his oprichnina — a reign of terror designed to break aristocratic opposition to centralized power. The serf system, which bound Russian peasants to the land and to their lords, was progressively tightened: the 1649 Ulozhenie law code made serfdom hereditary and permanent, reducing millions of peasants to a status barely distinguishable from slavery. Peter the Great (r. 1682-1725) forcibly Westernized Russia after visiting Western Europe during his 'Grand Embassy' of 1697-1698. He built the new capital of St. Petersburg on the Baltic coast as Russia's 'window to Europe,' compelled nobles to shave their beards and wear Western clothing, reformed the military and navy along European lines, and subordinated the Russian Orthodox Church to state authority. Catherine the Great (r. 1762-1796), a German-born princess who seized power from her husband, continued Russian expansion, annexing Crimea, partitioning Poland, and extending Russian territory to the Black Sea. Though she corresponded with Enlightenment philosophers like Voltaire and briefly considered emancipating the serfs, Catherine ultimately strengthened serfdom and crushed the Pugachev Rebellion (1773-1775), a massive peasant uprising that threatened the social order."
      },
      {
        id: "set3",
        setNum: 3,
        title: "Set 3 — Qing Dynasty Decline and Reform (c. 1750-1900)",
        passage: "The Qing Dynasty (1644-1912), founded by the Manchu people who conquered Ming China, presided over one of the most populous and economically productive empires in the world during its zenith. By the mid-nineteenth century, however, the dynasty faced a cascade of internal and external crises that threatened its survival. The First Opium War (1839-1842) erupted when the Qing government attempted to halt the British East India Company's illegal opium trade, which was causing widespread addiction and draining silver from the Chinese economy. Britain's decisive naval victory forced China to sign the Treaty of Nanjing (1842), the first of what Chinese historians call the 'unequal treaties,' which ceded Hong Kong to Britain, opened five treaty ports to foreign trade, and imposed extraterritoriality — exempting British subjects from Chinese law. The Taiping Rebellion (1850-1864), led by Hong Xiuquan, who claimed to be the younger brother of Jesus Christ, was a millenarian movement that established a rival state in southern China and may have caused 20 to 30 million deaths — making it the deadliest civil war in history. The Self-Strengthening Movement (c. 1861-1895), championed by reform-minded officials like Li Hongzhang, sought to adopt Western military technology and industrial methods while preserving Confucian values and institutions — captured in the slogan 'Chinese learning for the essence, Western learning for practical application.' The Sino-Japanese War of 1894-1895 exposed the inadequacy of these half-measures when Japan's modernized military decisively defeated China's forces. The Boxer Rebellion of 1899-1901, supported tacitly by the Empress Dowager Cixi, saw Chinese martial arts societies — the 'Boxers' — attack foreign legations and Chinese Christians in a desperate bid to expel foreign influence, only to be crushed by an eight-nation expeditionary force that imposed further humiliating concessions."
      },
      {
        id: "set4",
        setNum: 4,
        figureId: "sim6-set4-hitler-mussolini",
        title: "Set 4 — The Interwar Period and the Rise of Totalitarianism (c. 1918-1939)",
        passage: "The aftermath of the First World War created conditions that gave rise to totalitarian regimes across Europe. The Treaty of Versailles (1919) imposed punishing terms on Germany: territorial losses, disarmament, acceptance of sole war guilt through Article 231, and reparations payments so enormous that the economist John Maynard Keynes warned they would destabilize the European economy. The Weimar Republic, Germany's fragile democratic experiment, struggled with hyperinflation (peaking in 1923 when a loaf of bread cost billions of marks), political violence from extremists on both left and right, and a widespread sense of national humiliation. The Great Depression, triggered by the American stock market crash of 1929, devastated the German economy and propelled Adolf Hitler's National Socialist (Nazi) Party to power by 1933. Hitler dismantled democratic institutions, established a one-party dictatorship, persecuted Jews and other minorities through the Nuremberg Laws (1935), and rearmed Germany in violation of the Versailles treaty. In the Soviet Union, Joseph Stalin consolidated absolute power after Lenin's death in 1924, launching forced collectivization of agriculture — which caused the Holodomor famine in Ukraine (1932-1933), killing millions — and a crash industrialization program through the Five-Year Plans. Stalin's Great Purge (1936-1938) eliminated perceived political rivals through show trials and mass executions. In Italy, Benito Mussolini had established the first fascist dictatorship in 1922, pioneering the use of state-controlled media, paramilitary violence, and ultra-nationalist ideology that would inspire imitators across Europe. Japan's military-dominated government pursued aggressive expansion in East Asia, invading Manchuria in 1931 and launching a full-scale war against China in 1937."
      },
      {
        id: "set5",
        setNum: 5,
        title: "Set 5 — The Middle East Since 1945 (c. 1945-present)",
        passage: "The modern Middle East has been shaped by the intersection of decolonization, Cold War rivalries, the politics of oil, religious revivalism, and the Arab-Israeli conflict. The creation of the State of Israel in 1948, following the United Nations partition of the British Mandate for Palestine, triggered the first Arab-Israeli war and the displacement of approximately 700,000 Palestinian Arabs — an event known to Palestinians as the Nakba ('catastrophe'). Subsequent wars in 1967 and 1973 reshaped territorial boundaries and deepened the conflict. The 1973 war led to the OPEC oil embargo, in which Arab oil-producing states weaponized petroleum exports against Western nations that supported Israel, quadrupling oil prices and demonstrating the geopolitical power of Middle Eastern energy resources. The Iranian Revolution of 1979, which overthrew the Western-backed Shah Mohammad Reza Pahlavi and installed an Islamic republic under Ayatollah Ruhollah Khomeini, represented a dramatic rejection of Western-style modernization in favor of Shia Islamic governance. The revolution inspired Islamist movements across the Muslim world and initiated decades of tension between Iran and the United States. The Iran-Iraq War (1980-1988), the Gulf War (1990-1991), and the Iraq War (2003-2011) further destabilized the region. In 2010-2012, the Arab Spring — a wave of pro-democracy protests that swept Tunisia, Egypt, Libya, Syria, and other countries — raised hopes for political liberalization, but in most cases resulted in authoritarian retrenchment, civil war, or state collapse. The Syrian Civil War, which began in 2011, produced millions of refugees and drew in regional and global powers, underscoring the continuing volatility of the region."
      }
    ],
    mcQuestions: [
      // SET 1 — Questions 1-11: West African Kingdoms (c. 1200-1450)
      {
        num: 1,
        set: 1,
        stem: "The succession of empires described in the passage — Ghana, Mali, and Songhai — most directly illustrates which of the following patterns in world history?",
        choices: [
          "A", "States that control key nodes in long-distance trade networks can accumulate great wealth and power",
          "B", "Empires in sub-Saharan Africa developed entirely independently of outside cultural influences",
          "C", "Military technology was irrelevant to political power in pre-modern West Africa",
          "D", "West African states were primarily maritime powers dependent on oceanic trade routes"
        ],
        answer: "A"
      },
      {
        num: 2,
        set: 1,
        stem: "Mansa Musa's pilgrimage to Mecca in 1324-1325 is most significant in world history because it demonstrated which of the following?",
        choices: [
          "A", "The complete replacement of indigenous African religions by Islam in all of West Africa",
          "B", "The integration of West African rulers and economies into the broader Islamic world through trade and religious networks",
          "C", "The military dominance of the Mali Empire over North African and Middle Eastern states",
          "D", "The technological superiority of West African civilizations over contemporary European societies"
        ],
        answer: "B"
      },
      {
        num: 3,
        set: 1,
        stem: "The establishment of Timbuktu as a center of Islamic learning under Mansa Musa most closely parallels which of the following developments in other regions during the same period?",
        choices: [
          "A", "The founding of universities in medieval Europe, such as the University of Paris and Oxford",
          "B", "The establishment of Shinto shrines throughout medieval Japan",
          "C", "The construction of the Great Wall of China during the Ming Dynasty",
          "D", "The spread of printing technology in Korea under the Goryeo Dynasty"
        ],
        answer: "A"
      },
      {
        num: 4,
        set: 1,
        stem: "The passage indicates that the gold-salt trade was central to West African state formation primarily because it allowed rulers to do which of the following?",
        choices: [
          "A", "Eliminate all competition from rival states through direct military force",
          "B", "Establish diplomatic relations exclusively with European Christian kingdoms",
          "C", "Control and tax the exchange of essential commodities moving between distinct ecological zones",
          "D", "Develop industrial manufacturing to compete with Asian economies"
        ],
        answer: "C"
      },
      {
        num: 5,
        set: 1,
        stem: "Askia Muhammad's promotion of Islamic scholarship and standardization of weights and measures in the Songhai Empire most directly served which of the following purposes?",
        choices: [
          "A", "Eliminating all non-Islamic cultural practices throughout the empire",
          "B", "Preparing the empire to resist Portuguese naval expansion along the West African coast",
          "C", "Facilitating commercial exchange and strengthening administrative cohesion across a large and diverse empire",
          "D", "Converting the population of sub-Saharan Africa entirely to Sunni Islam"
        ],
        answer: "C"
      },
      {
        num: 6,
        set: 1,
        stem: "The defeat of the Songhai Empire by Moroccan forces at the Battle of Tondibi in 1591 best illustrates which of the following broader historical developments?",
        choices: [
          "A", "Religious differences between Songhai and Morocco were the sole cause of the conflict",
          "B", "African kingdoms universally adopted European military technology by the sixteenth century",
          "C", "The trans-Saharan trade had completely collapsed before the Moroccan invasion",
          "D", "The spread of gunpowder weapons increasingly determined military and political outcomes across Afro-Eurasia"
        ],
        answer: "D"
      },
      {
        num: 7,
        set: 1,
        stem: "A historian seeking to evaluate the accuracy of accounts describing Mansa Musa's distribution of gold during his pilgrimage would most likely need to consider which of the following?",
        choices: [
          "A", "The accounts may reflect exaggeration typical of medieval travel literature and oral traditions",
          "B", "Gold had no monetary value in the medieval Islamic world",
          "C", "Mansa Musa's pilgrimage was fabricated by later European historians",
          "D", "North African and Egyptian observers had no knowledge of the trans-Saharan gold trade"
        ],
        answer: "D"
      },
      {
        num: 8,
        set: 1,
        stem: "Which of the following best describes the role of Islam in the political systems of the West African empires discussed in the passage?",
        choices: [
          "A", "Islam served as a unifying cultural and legal framework that facilitated governance and trade across diverse populations",
          "B", "Islam was forcibly imposed on all subjects of Ghana, Mali, and Songhai through systematic military campaigns",
          "C", "Islam played no role in the governance of West African states, which relied entirely on indigenous political traditions",
          "D", "Islamic religious leaders held supreme political authority, with secular rulers serving as their subordinates"
        ],
        answer: "C"
      },
      {
        num: 9,
        set: 1,
        stem: "The development of a professional army and provincial governors under the Songhai Empire most closely resembles administrative practices in which of the following contemporary states?",
        choices: [
          "A", "The decentralized feudal kingdoms of medieval Western Europe",
          "B", "The theocratic government of the Papal States in Italy",
          "C", "The bureaucratic and military systems of the Ottoman Empire",
          "D", "The stateless societies of the Pacific Islands"
        ],
        answer: "C"
      },
      {
        num: 10,
        set: 1,
        stem: "Which of the following was a significant long-term consequence of the collapse of the Songhai Empire in 1591?",
        choices: [
          "A", "The immediate establishment of European colonial rule throughout West Africa",
          "B", "The complete disappearance of Islam from West Africa",
          "C", "Political fragmentation in the Western Sudan that made the region more vulnerable to the Atlantic slave trade",
          "D", "The emergence of a unified West African republic modeled on European nation-states"
        ],
        answer: "C"
      },
      {
        num: 11,
        set: 1,
        stem: "The passage's description of the ecological zones involved in the gold-salt trade — forests producing gold and desert regions producing salt — best illustrates which of the following concepts in world history?",
        choices: [
          "A", "Environmental complementarity as a driver of long-distance trade between regions with different resources",
          "B", "The absence of any connection between geography and patterns of economic exchange",
          "C", "The superiority of pastoral nomadic economies over settled agricultural societies",
          "D", "The irrelevance of climate and geography to the development of trade networks"
        ],
        answer: "C"
      },
      // SET 2 — Questions 12-22: Russian Empire (c. 1450-1750)
      {
        num: 12,
        set: 2,
        stem: "Peter the Great's program of Westernization following his 'Grand Embassy' most directly illustrates which of the following patterns in early modern world history?",
        choices: [
          "A", "All non-Western societies eagerly adopted European cultural practices without resistance",
          "B", "Rulers selectively borrowed foreign technologies, institutions, and cultural practices to strengthen their states",
          "C", "Western Europe was the only source of technological and cultural innovation in the early modern period",
          "D", "Russia had no distinct cultural traditions before Peter the Great's reign"
        ],
        answer: "B"
      },
      {
        num: 13,
        set: 2,
        stem: "The progressive tightening of serfdom in Russia, culminating in the 1649 Ulozhenie, is most comparable to which of the following developments in other regions?",
        choices: [
          "A", "The abolition of slavery in the British Empire during the nineteenth century",
          "B", "The emancipation of serfs in Japan under the Meiji Restoration",
          "C", "The expansion of democratic suffrage in Western Europe during the Enlightenment",
          "D", "The development of the encomienda and hacienda systems in Spanish America, which bound indigenous laborers to the land"
        ],
        answer: "D"
      },
      {
        num: 14,
        set: 2,
        stem: "Ivan IV's oprichnina — his campaign of terror against the Russian nobility — most directly served which of the following political objectives?",
        choices: [
          "A", "Strengthening centralized autocratic power by eliminating potential aristocratic opposition",
          "B", "Promoting religious tolerance by breaking the political power of the Orthodox Church",
          "C", "Establishing a constitutional monarchy with shared power between the tsar and the nobility",
          "D", "Encouraging democratic participation among the Russian peasantry"
        ],
        answer: "A"
      },
      {
        num: 15,
        set: 2,
        stem: "Catherine the Great's correspondence with Enlightenment philosophers such as Voltaire, combined with her strengthening of serfdom, best illustrates which of the following contradictions of the eighteenth century?",
        choices: [
          "A", "Enlightenment ideas about liberty and equality were sometimes embraced rhetorically by rulers who depended on systems of coerced labor",
          "B", "The Enlightenment had no influence whatsoever on political thought outside of Western Europe",
          "C", "All European monarchs fully implemented Enlightenment principles of individual freedom during the eighteenth century",
          "D", "Voltaire and other Enlightenment thinkers actively supported the institution of serfdom"
        ],
        answer: "A"
      },
      {
        num: 16,
        set: 2,
        stem: "The construction of St. Petersburg as Russia's 'window to Europe' is best understood as an example of which of the following?",
        choices: [
          "A", "A state-directed effort to reorient a society's political and cultural connections toward a new region",
          "B", "A grassroots democratic movement demanding closer ties with Western Europe",
          "C", "An attempt to establish Russia as a major maritime power in the Indian Ocean",
          "D", "A retreat from international engagement into cultural isolation"
        ],
        answer: "C"
      },
      {
        num: 17,
        set: 2,
        stem: "Russian expansion into Siberia under Ivan IV most closely parallels which of the following processes in other parts of the world during the same period?",
        choices: [
          "A", "Spanish conquest and colonization of the Americas, driven by a combination of economic motives, military force, and settler expansion",
          "B", "The peaceful cultural exchange between China and Japan during the Ming Dynasty",
          "C", "The voluntary migration of African peoples to the Caribbean islands",
          "D", "The unification of the Italian peninsula under a single government"
        ],
        answer: "A"
      },
      {
        num: 18,
        set: 2,
        stem: "The Pugachev Rebellion of 1773-1775 most directly reflected which of the following social tensions in the Russian Empire?",
        choices: [
          "A", "Widespread resentment among enserfed peasants and Cossacks against the oppressive conditions imposed by the nobility and the state",
          "B", "Demands by the Russian nobility for greater power relative to the monarchy",
          "C", "A religious conflict between the Russian Orthodox Church and Islamic communities in Siberia",
          "D", "A movement by urban factory workers demanding industrialization and modernization"
        ],
        answer: "D"
      },
      {
        num: 19,
        set: 2,
        stem: "Peter the Great's subordination of the Russian Orthodox Church to state authority most closely resembles which of the following policies in other early modern states?",
        choices: [
          "A", "The Ottoman millet system, which granted religious autonomy to non-Muslim communities",
          "B", "Henry VIII's establishment of the Church of England under royal supremacy",
          "C", "The Mughal Emperor Akbar's promotion of Din-i-Ilahi as an eclectic interfaith movement",
          "D", "The Japanese policy of sakoku, which closed the country to foreign religious influence"
        ],
        answer: "B"
      },
      {
        num: 20,
        set: 2,
        stem: "The passage's characterization of Moscow as the 'Third Rome' after Constantinople's fall in 1453 most directly reflects which of the following historical claims?",
        choices: [
          "A", "Russia's ambition to revive the Roman Republic's system of democratic governance",
          "B", "A belief that Russia was destined to conquer and rule the Italian peninsula",
          "C", "Russia's claim to be the legitimate successor to Roman and Byzantine imperial and Orthodox Christian traditions",
          "D", "The rejection of all Byzantine cultural and religious influence by the Muscovite state"
        ],
        answer: "C"
      },
      {
        num: 21,
        set: 2,
        stem: "Which of the following best explains why Peter the Great compelled Russian nobles to shave their beards and wear Western clothing?",
        choices: [
          "A", "He believed cultural transformation of the elite was necessary to modernize Russia and align it with European powers",
          "B", "He was attempting to promote religious conversion from Orthodoxy to Protestantism",
          "C", "He sought to reduce government spending by standardizing a simpler style of dress",
          "D", "He was responding to demands from the Russian peasantry for social equality with the nobility"
        ],
        answer: "D"
      },
      {
        num: 22,
        set: 2,
        stem: "Catherine the Great's annexation of Crimea and partition of Poland are best understood in the context of which of the following broader developments?",
        choices: [
          "A", "The decline of European colonialism in Asia and Africa during the eighteenth century",
          "B", "The collapse of all centralized states in Eastern Europe during the Enlightenment",
          "C", "A global movement toward national self-determination and democratic governance",
          "D", "Great power competition among European states for territorial expansion and strategic advantage"
        ],
        answer: "D"
      },
      // SET 3 — Questions 23-33: Qing Dynasty Decline & Reform (c. 1750-1900)
      {
        num: 23,
        set: 3,
        stem: "The British use of the opium trade to address their trade deficit with China most directly illustrates which of the following features of nineteenth-century global commerce?",
        choices: [
          "A", "European powers used both legal trade and illicit commodities to force open markets that resisted integration into the global economy",
          "B", "China voluntarily opened its markets to British trade as part of a mutual cultural exchange",
          "C", "The opium trade benefited both Chinese consumers and the Qing government equally",
          "D", "European merchants had no interest in Chinese goods and traded only to spread Christianity"
        ],
        answer: "A"
      },
      {
        num: 24,
        set: 3,
        stem: "The Treaty of Nanjing's provision of extraterritoriality — exempting British subjects from Chinese law — most directly represented which of the following?",
        choices: [
          "A", "A voluntary Qing gesture of diplomatic goodwill toward a valued trading partner",
          "B", "An infringement on Chinese sovereignty imposed by a militarily superior foreign power",
          "C", "A common feature of all international treaties between sovereign states in the nineteenth century",
          "D", "A mutual agreement that equally benefited both British and Chinese legal systems"
        ],
        answer: "B"
      },
      {
        num: 25,
        set: 3,
        stem: "The Taiping Rebellion's combination of Christian-influenced theology and social revolution is most significant because it illustrates which of the following historical patterns?",
        choices: [
          "A", "Foreign religious ideas could be adapted and combined with local grievances to fuel massive internal uprisings against existing governments",
          "B", "Christianity was uniformly adopted throughout China during the nineteenth century",
          "C", "The Qing Dynasty actively promoted Christian missionary activity to modernize Chinese society",
          "D", "All nineteenth-century rebellions were motivated exclusively by economic grievances"
        ],
        answer: "C"
      },
      {
        num: 26,
        set: 3,
        stem: "The Self-Strengthening Movement's slogan 'Chinese learning for the essence, Western learning for practical application' most directly reflects which of the following approaches to modernization?",
        choices: [
          "A", "Complete rejection of all foreign technologies and cultural practices",
          "B", "Total abandonment of Chinese cultural traditions in favor of Western models",
          "C", "Selective adoption of Western technology while attempting to preserve traditional cultural values and institutions",
          "D", "A democratic revolution aimed at establishing a Western-style parliamentary government"
        ],
        answer: "C"
      },
      {
        num: 27,
        set: 3,
        stem: "The Self-Strengthening Movement's approach to modernization is most directly comparable to which of the following in another society?",
        choices: [
          "A", "The Meiji Restoration in Japan, which also adopted Western technology and institutions while debating the preservation of traditional culture",
          "B", "The French Revolution's complete rejection of the ancien régime in favor of Enlightenment principles",
          "C", "The Industrial Revolution in Britain, which was driven entirely by private enterprise without state involvement",
          "D", "The American Revolution's establishment of a constitutional republic"
        ],
        answer: "A"
      },
      {
        num: 28,
        set: 3,
        stem: "China's defeat in the Sino-Japanese War of 1894-1895 was historically significant primarily because it demonstrated which of the following?",
        choices: [
          "A", "European military technology was irrelevant to power dynamics in East Asia",
          "B", "Japan's more thorough modernization program had produced a military capable of defeating a much larger but incompletely reformed China",
          "C", "China's Self-Strengthening Movement had been entirely successful in modernizing the Chinese military",
          "D", "Japan and China had been allies throughout the nineteenth century"
        ],
        answer: "B"
      },
      {
        num: 29,
        set: 3,
        stem: "The Boxer Rebellion's attacks on foreign legations and Chinese Christians most directly expressed which of the following sentiments?",
        choices: [
          "A", "Popular support for the Qing Dynasty's program of rapid Westernization",
          "B", "A desire to establish a democratic republic modeled on the United States",
          "C", "Xenophobic resistance to foreign imperialism and the cultural changes it was imposing on Chinese society",
          "D", "Elite scholarly opposition to the traditional Confucian examination system"
        ],
        answer: "C"
      },
      {
        num: 30,
        set: 3,
        stem: "The 'unequal treaties' imposed on China after the Opium Wars had which of the following long-term effects on Chinese politics and society?",
        choices: [
          "A", "They strengthened the Qing Dynasty by providing access to Western markets",
          "B", "They fueled Chinese nationalism and contributed to revolutionary movements that sought to end both foreign imperialism and the Qing Dynasty",
          "C", "They had no significant impact on Chinese political development",
          "D", "They led to the immediate establishment of a Chinese democracy"
        ],
        answer: "B"
      },
      {
        num: 31,
        set: 3,
        stem: "The passage's description of multiple crises — opium addiction, military defeats, massive rebellions, and foreign intervention — facing the Qing Dynasty best illustrates which of the following concepts?",
        choices: [
          "A", "The cyclical dynastic pattern in Chinese history in which internal decay and external pressure combine to undermine ruling authority",
          "B", "The complete absence of any reform efforts by the Qing government during the nineteenth century",
          "C", "The success of the Qing Dynasty in maintaining territorial integrity throughout the nineteenth century",
          "D", "The irrelevance of Western imperialism to political change within China"
        ],
        answer: "A"
      },
      {
        num: 32,
        set: 3,
        stem: "The Empress Dowager Cixi's tacit support for the Boxers, followed by the movement's crushing defeat by a multinational force, most directly resulted in which of the following?",
        choices: [
          "A", "The immediate overthrow of the Qing Dynasty and establishment of a republic",
          "B", "Further erosion of Qing authority and credibility, accelerating the dynasty's eventual collapse",
          "C", "A strengthening of the Qing Dynasty's international prestige and diplomatic standing",
          "D", "China's admission as an equal partner in the European alliance system"
        ],
        answer: "D"
      },
      {
        num: 33,
        set: 3,
        stem: "Which of the following best explains why the Qing Dynasty's Self-Strengthening Movement ultimately failed to prevent China's continued decline?",
        choices: [
          "A", "The movement attempted technological modernization without addressing the deeper structural, political, and institutional reforms needed to compete with fully industrialized states",
          "B", "The movement rejected all Western technology and relied exclusively on traditional Chinese methods",
          "C", "Foreign powers actively supported the Self-Strengthening Movement and ensured its success",
          "D", "The Qing Dynasty had no access to information about Western military or industrial technology"
        ],
        answer: "D"
      },
      // SET 4 — Questions 34-44: Interwar Period & Rise of Totalitarianism (c. 1918-1939)
      {
        num: 34,
        set: 4,
        stem: "According to the passage, the Treaty of Versailles contributed to political instability in Germany primarily by doing which of the following?",
        choices: [
          "A", "Imposing punishing terms that fostered widespread resentment and a sense of national humiliation",
          "B", "Granting Germany generous reconstruction aid that strengthened the Weimar Republic",
          "C", "Establishing a democratic government in Germany that enjoyed universal popular support",
          "D", "Creating an alliance between Germany and the Soviet Union against Western Europe"
        ],
        answer: "A"
      },
      {
        num: 35,
        set: 4,
        stem: "The hyperinflation crisis in Weimar Germany in 1923 most directly illustrates which of the following broader historical patterns?",
        choices: [
          "A", "Economic instability can erode public confidence in democratic institutions and create openings for extremist movements",
          "B", "Inflation is always beneficial to economic growth in the long term",
          "C", "Democratic governments are immune to economic crises",
          "D", "The Weimar Republic's economic policies were universally praised by German citizens"
        ],
        answer: "A"
      },
      {
        num: 36,
        set: 4,
        stem: "Stalin's forced collectivization of agriculture and the resulting Holodomor famine in Ukraine most directly demonstrate which of the following characteristics of totalitarian regimes?",
        choices: [
          "A", "The willingness of totalitarian states to sacrifice millions of lives to achieve ideological and economic objectives",
          "B", "The effectiveness of collectivized agriculture in increasing food production",
          "C", "The Soviet Union's commitment to protecting the welfare of minority nationalities",
          "D", "Stalin's reliance on democratic consensus to implement agricultural reforms"
        ],
        answer: "C"
      },
      {
        num: 37,
        set: 4,
        stem: "Mussolini's pioneering role in establishing fascism in Italy in 1922 is historically significant primarily because it demonstrated which of the following?",
        choices: [
          "A", "The compatibility of fascism with liberal democratic principles",
          "B", "That ultra-nationalist, authoritarian movements could seize power by exploiting social unrest and fears of communist revolution",
          "C", "The inevitability of fascist rule in all European states after World War I",
          "D", "That Italy had no democratic traditions before Mussolini's rise to power"
        ],
        answer: "B"
      },
      {
        num: 38,
        set: 4,
        stem: "Japan's invasion of Manchuria in 1931 and full-scale war against China in 1937 most closely parallel which of the following developments in Europe during the same period?",
        choices: [
          "A", "The establishment of democratic governments in response to popular demand for self-determination",
          "B", "Nazi Germany's territorial expansion and rearmament in violation of the Versailles treaty",
          "C", "The formation of international organizations designed to prevent future wars",
          "D", "The peaceful dissolution of colonial empires in Asia and Africa"
        ],
        answer: "B"
      },
      {
        num: 39,
        set: 4,
        stem: "The Great Depression's role in Hitler's rise to power best illustrates which of the following connections between economics and politics?",
        choices: [
          "A", "Economic prosperity tends to strengthen extremist political movements",
          "B", "Global economic interconnectedness meant that a financial crisis originating in one country could destabilize political systems worldwide",
          "C", "The Great Depression had no impact on European politics because European economies were self-sufficient",
          "D", "Democratic governments always become stronger during periods of economic hardship"
        ],
        answer: "B"
      },
      {
        num: 40,
        set: 4,
        stem: "The Nuremberg Laws of 1935, which stripped Jews of German citizenship and prohibited intermarriage, are best understood as an example of which of the following?",
        choices: [
          "A", "State-directed racial classification and persecution as a tool of totalitarian ideology",
          "B", "A continuation of Weimar-era policies of religious tolerance",
          "C", "An international legal framework supported by the League of Nations",
          "D", "A temporary wartime measure that was reversed after World War II"
        ],
        answer: "A"
      },
      {
        num: 41,
        set: 4,
        stem: "Stalin's Great Purge of 1936-1938 most directly served which of the following political purposes?",
        choices: [
          "A", "Promoting free and open political debate within the Communist Party",
          "B", "Encouraging artistic and intellectual creativity during the Soviet cultural renaissance",
          "C", "Eliminating real and perceived political rivals to consolidate Stalin's absolute personal power",
          "D", "Preparing the Soviet Union for a defensive alliance with Nazi Germany"
        ],
        answer: "C"
      },
      {
        num: 42,
        set: 4,
        stem: "Which of the following most accurately describes a similarity among the totalitarian regimes discussed in the passage?",
        choices: [
          "A", "All three regimes — Nazi Germany, Stalinist USSR, and Fascist Italy — used state propaganda, political repression, and mass mobilization to maintain control",
          "B", "All three regimes promoted individual liberty and free-market capitalism as their core ideological principles",
          "C", "All three regimes were established through free and fair democratic elections",
          "D", "All three regimes pursued identical economic policies based on agricultural collectivization"
        ],
        answer: "D"
      },
      {
        num: 43,
        set: 4,
        stem: "John Maynard Keynes's warning that the Versailles reparations would destabilize Europe best reflects which of the following perspectives?",
        choices: [
          "A", "Keynes supported the complete destruction of the German state as a precondition for European peace",
          "B", "Keynes believed that economically punishing a defeated enemy would create conditions for future conflict rather than lasting peace",
          "C", "Keynes argued that Germany bore no responsibility for the outbreak of World War I",
          "D", "Keynes advocated for an immediate military alliance between Britain and Germany"
        ],
        answer: "B"
      },
      {
        num: 44,
        set: 4,
        stem: "The passage suggests that Article 231 of the Treaty of Versailles — the 'war guilt clause' — had which of the following effects on German public opinion?",
        choices: [
          "A", "It was widely accepted by the German population as a fair assessment of responsibility",
          "B", "It had no effect on German politics because ordinary citizens were unaware of its existence",
          "C", "It deepened feelings of humiliation and resentment that extremist movements later exploited",
          "D", "It inspired immediate reconciliation between Germany, France, and Britain"
        ],
        answer: "C"
      },
      // SET 5 — Questions 45-55: Middle East Since 1945 (c. 1945-present)
      {
        num: 45,
        set: 5,
        stem: "The creation of the State of Israel in 1948 and the resulting displacement of Palestinian Arabs most directly reflected which of the following broader developments of the twentieth century?",
        choices: [
          "A", "The tension between competing nationalist movements claiming the same territory in the context of decolonization",
          "B", "The universal acceptance of Zionism by all Arab states in the Middle East",
          "C", "The desire of the British Empire to maintain colonial control over Palestine indefinitely",
          "D", "A peaceful resolution to competing claims that was accepted by all parties"
        ],
        answer: "A"
      },
      {
        num: 46,
        set: 5,
        stem: "The OPEC oil embargo of 1973 is historically significant primarily because it demonstrated which of the following?",
        choices: [
          "A", "Oil-producing nations could use energy resources as a geopolitical weapon to influence the policies of industrialized nations",
          "B", "Western nations had developed alternative energy sources that made them independent of Middle Eastern oil",
          "C", "The oil embargo had no impact on global economic conditions",
          "D", "OPEC was a humanitarian organization dedicated to reducing global poverty"
        ],
        answer: "A"
      },
      {
        num: 47,
        set: 5,
        stem: "The Iranian Revolution of 1979 represented a significant departure from other twentieth-century revolutions primarily because it resulted in which of the following?",
        choices: [
          "A", "A communist government allied with the Soviet Union",
          "B", "A theocratic Islamic republic that explicitly rejected both Western capitalism and Soviet communism",
          "C", "A liberal democratic government modeled on Western European constitutions",
          "D", "A military dictatorship that continued the Shah's policies of modernization"
        ],
        answer: "B"
      },
      {
        num: 48,
        set: 5,
        stem: "The passage indicates that the Arab Spring protests of 2010-2012 'in most cases resulted in authoritarian retrenchment, civil war, or state collapse.' This outcome most directly challenges which of the following assumptions?",
        choices: [
          "A", "Popular pro-democracy movements inevitably lead to successful transitions to democratic governance",
          "B", "Authoritarian regimes are always stable and never face internal challenges",
          "C", "The Cold War was the only source of political instability in the Middle East",
          "D", "Social media and technology play no role in modern political movements"
        ],
        answer: "D"
      },
      {
        num: 49,
        set: 5,
        stem: "The Iran-Iraq War (1980-1988) is best understood in the context of which of the following regional dynamics?",
        choices: [
          "A", "Sectarian rivalry between Sunni-led Iraq and Shia-governed Iran, combined with territorial disputes and Cold War proxy competition",
          "B", "A coordinated effort by Iran and Iraq to resist Western imperialism through military alliance",
          "C", "A dispute over control of Mediterranean Sea trade routes",
          "D", "A war provoked exclusively by European colonial powers seeking to divide the Middle East"
        ],
        answer: "D"
      },
      {
        num: 50,
        set: 5,
        stem: "The Syrian Civil War's involvement of multiple regional and global powers most closely parallels which of the following historical situations?",
        choices: [
          "A", "The Spanish Civil War (1936-1939), in which foreign powers intervened on opposing sides of an internal conflict",
          "B", "The American Revolution, in which colonists fought for independence without any foreign assistance",
          "C", "The unification of Italy, which was achieved entirely through peaceful diplomatic negotiation",
          "D", "The Glorious Revolution in England, which was accomplished without violence"
        ],
        answer: "A"
      },
      {
        num: 51,
        set: 5,
        stem: "The passage describes the Nakba as the displacement of approximately 700,000 Palestinian Arabs in 1948. This event is most directly comparable to which of the following?",
        choices: [
          "A", "The forced relocation of Native Americans along the Trail of Tears in the 1830s",
          "B", "The voluntary migration of Europeans to the Americas during the nineteenth century",
          "C", "The expansion of the Ottoman Empire into the Balkans",
          "D", "The partition of British India in 1947, which also produced mass displacement and communal violence"
        ],
        answer: "D"
      },
      {
        num: 52,
        set: 5,
        stem: "Ayatollah Khomeini's characterization of the United States as the 'Great Satan' and his rejection of Western-style modernization most directly reflected which of the following intellectual and political currents?",
        choices: [
          "A", "A growing movement in parts of the Global South to reject Western cultural hegemony and articulate alternative models of governance rooted in local traditions",
          "B", "Universal agreement in the Muslim world that Western culture was entirely incompatible with Islam",
          "C", "The Iranian people's desire to maintain the Shah's program of rapid modernization",
          "D", "A military alliance between Iran and the Soviet Union against Western imperialism"
        ],
        answer: "B"
      },
      {
        num: 53,
        set: 5,
        stem: "Which of the following best explains why oil has been such a significant factor in the geopolitics of the Middle East since 1945?",
        choices: [
          "A", "The global economy's dependence on petroleum gave oil-producing states leverage over industrialized nations, while competition for access to oil resources drew foreign powers into regional conflicts",
          "B", "Oil is found exclusively in the Middle East and nowhere else in the world",
          "C", "Middle Eastern oil reserves were discovered only after 2000, making them a recent factor in geopolitics",
          "D", "Oil has had no significant impact on the foreign policies of Western nations toward the Middle East"
        ],
        answer: "B"
      },
      {
        num: 54,
        set: 5,
        stem: "The multiple wars between Israel and its Arab neighbors (1948, 1967, 1973) and the continuing Israeli-Palestinian conflict most directly illustrate which of the following themes in modern world history?",
        choices: [
          "A", "The difficulty of resolving competing nationalist claims to the same territory, especially when complicated by religious significance, refugee populations, and great power involvement",
          "B", "The irrelevance of religion to modern political conflicts in the Middle East",
          "C", "The success of the United Nations in resolving all territorial disputes through peaceful negotiation",
          "D", "The complete isolation of the Middle East from global political developments"
        ],
        answer: "D"
      },
      {
        num: 55,
        set: 5,
        stem: "Which of the following best describes the overall trajectory of political development in the Middle East since 1945, as presented in the passage?",
        choices: [
          "A", "A steady and uninterrupted transition from colonial rule to stable democratic governance",
          "B", "Continued instability driven by the intersection of decolonization, Cold War competition, resource politics, religious movements, and unresolved territorial disputes",
          "C", "Complete political isolation from global affairs, with the region developing entirely according to internal dynamics",
          "D", "Universal prosperity and peace following the end of European colonialism"
        ],
        answer: "B"
      }
    ],
    questions: [
      // SAQ 1 — Primary source, al-Umari's account of Mansa Musa's pilgrimage
      {
        num: 1,
        type: "saq",
        title: "SAQ 1 — Mansa Musa's Pilgrimage to Mecca (c. 1337)",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "primary",
        sources: [
          {
            label: "Source",
            title: "Shihab al-Din al-Umari, Pathways of Vision in the Realms of the Metropolises, c. 1337",
            description: "Shihab al-Din al-Umari was an Arab historian based in Cairo who gathered accounts from those who witnessed Mansa Musa's passage through Egypt during his pilgrimage to Mecca in 1324-1325. This excerpt describes the visit's economic and cultural impact.",
            text: "This man Mansa Musa spread upon Cairo the flood of his generosity: there was no person, officer of the court, or holder of any office of the sultanate who did not receive a sum of gold from him. The people of Cairo earned incalculable sums from him, whether by buying and selling or by gifts. So much gold was current in Cairo that it ruined the value of money. The gold price in Egypt fell and remained cheap for twelve years. The merchants and traders of the city profited enormously from the presence of this great king and his entourage. He was accompanied by a vast caravan including thousands of his subjects, soldiers, and servants, and he carried an immense quantity of gold. His piety was evident, for he distributed alms lavishly and built mosques along his route. The scholars of Cairo were impressed by his devotion and by his desire to learn more about the practices of Islam."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE way that al-Umari's account illustrates the wealth of the Mali Empire under Mansa Musa." },
          { letter: "B", prompt: "Explain ONE way that Mansa Musa's pilgrimage affected the political, economic, or cultural connections between West Africa and the broader Islamic world." },
          { letter: "C", prompt: "Explain ONE way in which the context in which al-Umari composed this account — based on secondhand reports gathered in Cairo — might affect the reliability or perspective of the source." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an example of wealth such as the vast quantities of gold distributed in Cairo, the size of the caravan with thousands of followers, the depression of gold prices in Egypt for twelve years, or the lavish gifts to Egyptian officials." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the strengthening of commercial ties between West Africa and Egypt, the raising of Mali's international prestige across the Islamic world, the stimulation of scholarly and religious exchange between West African and North African intellectuals, or the encouragement of further trans-Saharan trade." },
          { row: "C", category: "Part C", points: 1, description: "Explains a limitation such as the reliance on secondhand accounts potentially leading to exaggeration of the quantities of gold or the size of the entourage, the perspective of Egyptian observers who may have emphasized economic impact over other dimensions, or possible cultural biases in how an Arab historian interpreted a sub-Saharan African ruler." }
        ]
      },
      // SAQ 2 — Secondary source, Rwandan genocide and international response
      {
        num: 2,
        type: "saq",
        title: "SAQ 2 — The Rwandan Genocide and International Response (1994)",
        required: true,
        points: 3,
        suggestedTime: 13,
        stimulusType: "secondary",
        sources: [
          {
            label: "Source",
            title: "Samantha Power, 'A Problem from Hell': America and the Age of Genocide (2002)",
            description: "Samantha Power is an American journalist and diplomat who later served as U.S. Ambassador to the United Nations. This excerpt analyzes the international community's failure to intervene during the 1994 Rwandan genocide.",
            text: "In the spring of 1994, approximately 800,000 Rwandan Tutsi and moderate Hutu were slaughtered in the span of one hundred days — a rate of killing that exceeded even the mechanized genocide of the Holocaust. The killings were not spontaneous acts of tribal violence but a carefully planned campaign organized by elements of the Hutu-dominated government and carried out by militias armed with machetes and firearms. Despite clear warnings from the United Nations peacekeeping force commander on the ground, General Roméo Dallaire, that a genocide was being planned, the international community chose not to intervene. The United States, scarred by the disastrous intervention in Somalia in 1993, refused to use the word 'genocide' — which would have triggered a legal obligation to act under the 1948 Genocide Convention. France, which had trained and armed the Hutu-dominated Rwandan military, was reluctant to acknowledge the crimes of its allies. The UN Security Council actually reduced its peacekeeping force in Rwanda as the killing intensified. The failure to act in Rwanda stands as one of the most consequential moral failures of the late twentieth century and prompted intense debate about the international community's responsibility to protect civilian populations from mass atrocities."
          }
        ],
        parts: [
          { letter: "A", prompt: "Describe ONE cause of the Rwandan genocide identified or implied in the source." },
          { letter: "B", prompt: "Explain ONE reason the international community failed to intervene to stop the genocide, according to the source." },
          { letter: "C", prompt: "Explain ONE way that the legacy of European colonialism contributed to ethnic or political conflict in Rwanda OR in another region of the world during the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a cause such as the deliberate planning and organization of the genocide by elements of the Hutu-dominated government, the mobilization of militias, or the exploitation of ethnic divisions between Hutu and Tutsi — divisions that were hardened under Belgian colonial rule." },
          { row: "B", category: "Part B", points: 1, description: "Explains a reason such as the United States' reluctance to intervene after the Somalia debacle, the deliberate avoidance of the term 'genocide' to circumvent legal obligations, France's complicity through its support of the Hutu-dominated military, or the UN Security Council's decision to reduce rather than reinforce peacekeepers." },
          { row: "C", category: "Part C", points: 1, description: "Explains a colonial legacy such as Belgian colonial policies that formalized and rigidified Hutu-Tutsi ethnic categories through identity cards and preferential treatment, or parallels in other regions such as the partition of India along religious lines drawn by British colonial administration, or the Israeli-Palestinian conflict rooted in British Mandate policies." }
        ]
      },
      // SAQ 3 — No stimulus, effects of the Crusades on cross-cultural exchange (c. 1200-1450)
      {
        num: 3,
        type: "saq",
        title: "SAQ 3 — Effects of the Crusades on Cross-Cultural Exchange (c. 1200-1450)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE way that the Crusades facilitated cross-cultural exchange between European and Islamic societies in the period c. 1200-1450." },
          { letter: "B", prompt: "Explain ONE way that the knowledge or technologies transferred through Crusade-era contact affected the development of European society." },
          { letter: "C", prompt: "Explain ONE way that the Crusades also led to increased hostility or negative consequences for cross-cultural relations between Christians and Muslims." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes an example such as the introduction of new agricultural products (sugar, citrus) to Europe, the transfer of medical and scientific knowledge from Islamic scholars, European exposure to new textiles and luxury goods, or the establishment of Italian merchant colonies in the Levant that facilitated ongoing trade." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the stimulation of demand for Asian luxury goods that encouraged the growth of Mediterranean trade networks, the transmission of Arabic translations of Greek philosophical texts that contributed to European scholasticism, the adoption of Islamic architectural techniques in European building, or advances in European navigation and cartography informed by Islamic knowledge." },
          { row: "C", category: "Part C", points: 1, description: "Explains a negative consequence such as the deepening of religious animosity between Christians and Muslims that persisted for centuries, the massacre of Muslim and Jewish populations during the Crusades, the reinforcement of stereotypes and prejudice in both civilizations, or the disruption of previously tolerant coexistence in regions like Iberia and Sicily." }
        ]
      },
      // SAQ 4 — No stimulus, causes and effects of the Mexican Revolution (c. 1910-1920)
      {
        num: 4,
        type: "saq",
        title: "SAQ 4 — Causes and Effects of the Mexican Revolution (c. 1910-1920)",
        required: false,
        points: 3,
        suggestedTime: 13,
        stimulusType: "none",
        sources: [],
        parts: [
          { letter: "A", prompt: "Describe ONE cause of the Mexican Revolution of 1910." },
          { letter: "B", prompt: "Explain ONE way that the Mexican Revolution changed the political or social structure of Mexico." },
          { letter: "C", prompt: "Explain ONE way that the Mexican Revolution was similar to OR different from another revolution in the twentieth century." }
        ],
        rubric: [
          { row: "A", category: "Part A", points: 1, description: "Describes a cause such as the long dictatorship of Porfirio Díaz and his suppression of political opposition, the concentration of land ownership among a small elite (hacendados) while peasants were landless, foreign (especially American and British) domination of the Mexican economy, or the exploitation of industrial workers and indigenous peoples." },
          { row: "B", category: "Part B", points: 1, description: "Explains an effect such as the establishment of land reform provisions in the 1917 Constitution, the nationalization of oil resources, the empowerment of peasant and labor movements under leaders like Emiliano Zapata and Pancho Villa, or the creation of a one-party state dominated by the Institutional Revolutionary Party (PRI) for much of the twentieth century." },
          { row: "C", category: "Part C", points: 1, description: "Explains a comparison such as the similarity to the Russian Revolution in that both were driven by peasant and worker grievances against entrenched elites, or the difference from the Chinese Revolution in that the Mexican Revolution did not result in a communist government, or the similarity to the Cuban Revolution in addressing foreign economic domination and land inequality." }
        ]
      },
      // DBQ — Religious reform movements challenging social and political orders (c. 1450-1750)
      {
        num: 5,
        type: "dbq",
        title: "Document-Based Question",
        points: 7,
        suggestedTime: 60,
        prompt: "Evaluate the extent to which religious reform movements challenged existing social and political orders in the period circa 1450-1750.",
        documents: [
          {
            num: 1,
            source: "Martin Luther, Ninety-Five Theses, 1517",
            figureId: "sim6-dbq-doc1-luther-95-theses",
            text: "Out of love for the truth and from desire to elucidate it, the following propositions will be discussed at Wittenberg, under the presidency of the Reverend Father Martin Luther. He requests that those who are unable to be present and debate orally with us will do so in their absence by letter. When our Lord and Master Jesus Christ said 'Repent,' He willed the entire life of believers to be one of repentance. The pope cannot remit any guilt except by declaring and showing that it has been remitted by God. Those who believe that they can be certain of their salvation because they have purchased indulgence letters will be eternally damned together with their teachers. Christians are to be taught that the pope's pardons are useful if they do not put their trust in them, but altogether harmful if they lose their fear of God through them."
          },
          {
            num: 2,
            source: "Decrees of the Council of Trent, Session XXV, 1563",
            text: "The holy council commands all bishops and others who hold the office of teaching to instruct the faithful diligently concerning the intercession of saints, the veneration of relics, and the legitimate use of images, teaching them that the saints who reign together with Christ offer their prayers to God for men, and that it is good and useful to invoke them. Moreover, the images of Christ, of the Virgin Mother of God, and of the other saints are to be placed and retained in churches. But if any abuses shall have crept into these holy and salutary observances, the holy council earnestly desires that they be completely removed. Let all superstition be removed, all filthy quest for gain be eliminated, and all lasciviousness avoided, so that images shall not be painted or adorned with a seductive charm."
          },
          {
            num: 3,
            source: "Muhammad ibn Abd al-Wahhab, Book of Monotheism (Kitab al-Tawhid), c. 1744",
            text: "Know that the worship of God alone, without associating any partner with Him, is the most important obligation upon mankind. Its opposite — polytheism — is the greatest sin. Whoever directs any act of worship to other than God has committed the gravest of sins, even if it be visiting the graves of holy men to seek their intercession, for this is nothing but the worship of the dead. The people have fallen into grave errors by venerating saints and building shrines over their tombs, seeking blessings from trees and stones, and wearing amulets and charms. All of these practices are forms of polytheism that must be eradicated. We must return to the pure monotheism of the Prophet and his Companions, stripping away the innovations and corruptions that centuries of ignorance have introduced."
          },
          {
            num: 4,
            source: "Guru Nanak, Japji Sahib (foundational prayer of Sikhism), c. 1500",
            text: "There is one God, whose name is True, the Creator, without fear, without hatred, immortal, unborn, self-existent. By the grace of the Guru, He is known. The Lord created the night and day, the days of the week and the months, and He created the four seasons. Wonderful are the sounds, wonderful the knowledge, wonderful are the forms of all creation. By God's order, all are born; by God's order, all things are done. He who made the world watches over it. The caste distinctions that men draw among themselves are false, for in the eyes of the True Lord all are equal. No one is born high or low, and the worship of God requires no priest to intercede."
          },
          {
            num: 5,
            source: "Edict of Nantes, issued by King Henry IV of France, 1598",
            text: "We have by this perpetual and irrevocable edict established and proclaimed: First, that the recollection of everything done by one party or the other between March 1585 and our accession to the crown shall remain obliterated and forgotten, as if no such things had ever happened. We prohibit all our subjects, of whatever estate and condition, from renewing the memory thereof. We permit those of the so-called Reformed Religion to live and abide in all the cities and places of this our kingdom, free from all inquisition, molestation, or compulsion to do anything in the matter of religion contrary to their conscience. We also permit those of the said religion to carry on the exercise of the same in all villages and places of our dominion where it was established and publicly enjoyed in the year 1597."
          },
          {
            num: 6,
            source: "Act of Supremacy, Parliament of England, 1534",
            text: "Albeit the King's Majesty justly and rightfully is and ought to be the supreme head of the Church of England, and so is recognized by the clergy of this realm in their Convocations; yet nevertheless for corroboration and confirmation thereof, and for increase of virtue in Christ's religion within this realm of England, and to repress and extirp all errors, heresies, and other enormities and abuses heretofore used in the same, be it enacted by authority of this present Parliament that the King our Sovereign Lord, his heirs and successors kings of this realm, shall be taken, accepted, and reputed the only supreme head in earth of the Church of England, and shall have and enjoy annexed and united to the imperial crown of this realm all honors, dignities, and jurisdictions to the said dignity belonging."
          },
          {
            num: 7,
            source: "Adapted from a modern historian's analysis of the German Peasants' War, 2005",
            text: "The German Peasants' War of 1524-1525 represents one of the most dramatic examples of religious reform ideas being applied to social and political grievances. Inspired by Luther's emphasis on the priesthood of all believers and his challenge to established Church authority, peasant communities in southwestern Germany formulated the Twelve Articles — a list of demands including the abolition of serfdom, the right of communities to choose their own pastors, reduction of excessive tithes, and the restoration of common lands and forests that had been seized by the nobility. The peasants argued that their demands were consistent with Scripture and the principles of Christian liberty that the reformers preached. Luther himself, however, was horrified by the rebellion and published a violent tract urging the princes to suppress the peasants without mercy. The uprising was crushed with enormous bloodshed — an estimated 100,000 peasants were killed — demonstrating that the political and social implications of religious reform could far exceed what the reformers themselves intended or were willing to endorse."
          }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 3, description: "Uses at least 3 documents to address the topic (1pt), uses at least 4 documents and explains how they support the argument (2pts), uses at least 1 piece of evidence beyond the documents (1pt)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Sources at least 2 documents by explaining point of view, purpose, historical situation, or audience (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      },
      // LEQ — Responses to foreign influence
      {
        num: 6,
        type: "leq",
        title: "Long Essay Question",
        points: 6,
        suggestedTime: 40,
        options: [
          { id: 2, prompt: "In the period 1200-1450, evaluate the extent to which societies adapted to or resisted Mongol influence in Afro-Eurasia." },
          { id: 3, prompt: "In the period 1450-1750, evaluate the extent to which non-European societies developed strategies to respond to European expansion." },
          { id: 4, prompt: "In the period 1750-1900, evaluate the extent to which reform movements in non-Western societies were responses to the challenges posed by Western imperialism." }
        ],
        rubric: [
          { row: "A", category: "Thesis/Claim", points: 1, description: "Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning." },
          { row: "B", category: "Contextualization", points: 1, description: "Describes a broader historical context relevant to the prompt." },
          { row: "C", category: "Evidence", points: 2, description: "Provides specific examples of evidence relevant to the topic (1pt). Uses specific and relevant examples of evidence to support an argument (2pts)." },
          { row: "D", category: "Analysis & Reasoning", points: 2, description: "Uses historical reasoning to frame or structure an argument (1pt). Demonstrates a complex understanding (1pt)." }
        ]
      }
    ]
  },  // ========================================================================
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
