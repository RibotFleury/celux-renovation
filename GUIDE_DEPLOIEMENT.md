# 🚀 Guide de Déploiement Complet : Celux Rénovation
### *De zéro à une entreprise en ligne professionnelle*

Ce guide est conçu pour vous accompagner pas à pas, même si vous n'avez aucune expérience technique. Suivez chaque étape dans l'ordre.

---

## 🏗️ Étape 1 : Préparer votre "Maison de Code" (GitHub)
*GitHub est l'endroit où nous allons stocker vos fichiers de manière sécurisée.*

1. **Création du compte** : Allez sur [GitHub.com](https://github.com) et créez un compte gratuit.
2. **Créer un "Repository" (Dépôt)** : 
   - Cliquez sur le bouton vert **"New"** (Nouveau) en haut à gauche.
   - Nommez-le : `celux-renovation`.
   - **TRÈS IMPORTANT** : Cochez la case **"Private"** (Privé) pour que personne d'autre ne voie votre code.
   - Cliquez sur **"Create repository"**.
3. **Mettre vos fichiers** : 
   - Si vous ne savez pas utiliser les commandes techniques, cliquez sur le lien **"uploading an existing file"** (téléverser un fichier existant) sur la page qui vient de s'ouvrir.
   - Glissez et déposez TOUS les fichiers de votre projet ici.
   - En bas de la page, cliquez sur le bouton vert **"Commit changes"**.

---

## 🌐 Étape 2 : Mettre votre site en ligne (Vercel)
*Vercel va transformer votre code GitHub en un site web accessible partout.*

1. **Connexion** : Allez sur [Vercel.com](https://vercel.com) et cliquez sur **"Sign Up"**.
2. **Lien GitHub** : Choisissez **"Continue with GitHub"**. Cela connecte vos fichiers à votre hébergeur.
3. **Importation** : 
   - Vous verrez une liste de vos projets GitHub. Cliquez sur le bouton **"Import"** à côté de `celux-renovation`.
4. **Configuration (C'est ici que tout se joue !)** :
   - Avant de cliquer sur "Deploy", cherchez la section **"Environment Variables"** (Variables d'environnement). Cliquez sur la petite flèche pour l'ouvrir.
   - Vous devez ajouter **2 variables** pour que votre formulaire de contact fonctionne :
     - **Nom 1** : `EMAIL_USER` | **Valeur 1** : `kamsuleader@gmail.com`
     - Cliquez sur **"Add"**.
     - **Nom 2** : `EMAIL_PASS` | **Valeur 2** : `fddsavvshmpbshck`
     - Cliquez sur **"Add"**.
   - *Pourquoi ces valeurs ? Ce sont vos accès de test pour vérifier que tout marche avant de passer à votre adresse pro.*
5. **Lancement** : Cliquez sur le gros bouton noir **"Deploy"**.
6. **Félicitations** : Après 1 minute, Vercel vous donnera une adresse (ex: `celux.vercel.app`). Votre site est en direct !

---

## 💎 Étape 3 : Votre adresse pro `.ca` (Le Domaine)
*Un site pro doit finir par .ca pour rassurer vos clients québécois.*

1. Dans votre projet sur Vercel, allez dans l'onglet **"Settings"** (Paramètres) puis **"Domains"**.
2. Cliquez sur **"Add"** (Ajouter).
3. Tapez l'adresse que vous voulez (ex: `celuxrenovation.ca`).
4. Si elle est libre, Vercel vous proposera de l'acheter (environ 20$ / an). Suivez les étapes de paiement.
5. Une fois achetée, Vercel s'occupe de tout : votre site sera accessible via ce nom en quelques minutes.

---

## 📧 Étape 4 : Votre Email Professionnel (Zoho)
*Ne répondez pas avec un @gmail.com, utilisez info@celuxrenovation.ca.*

1. Allez sur [Zoho Mail](https://www.zoho.com/mail/zohomail-pricing.html) et prenez le forfait **"Mail Lite"** (environ 1$/mois).
2. **Vérification** : Zoho va vous donner des codes techniques (appelés MX et TXT). 
   - Retournez sur Vercel > Domains > Edit > **View DNS Records**.
   - Copiez les codes de Zoho ici. C'est ce qui permet à vos emails d'arriver au bon endroit.
3. **Mot de passe d'application** : Une fois votre compte Zoho créé :
   - Allez dans les réglages de sécurité de Zoho.
   - Cherchez **"App Password"**. Créez-en un nommé "Site Web". 
   - Zoho vous donnera un code de **16 lettres**. Notez-le.

---

## 🛠️ Étape 5 : Le Passage Final en Production
*Maintenant, on remplace les accès de test par VOS accès réels.*

1. Sur Vercel, retournez dans **Settings** > **Environment Variables**.
2. Cliquez sur les trois petits points `...` à côté de vos variables pour les modifier :
   - `EMAIL_USER` : Changez par votre nouveau mail (ex: `info@celuxrenovation.ca`).
   - `EMAIL_PASS` : Changez par le code de 16 lettres que Zoho vous a donné à l'étape 4.
3. **Redéployer** : Allez dans l'onglet **"Deployments"**, cliquez sur les `...` à droite de votre dernier déploiement et choisissez **"Redeploy"**.

**VOUS AVEZ RÉUSSI !** Votre entreprise est maintenant une entité professionnelle complète sur le web.

---

### 💡 Conseils pour l'avenir
- **Mise à jour** : Si vous voulez changer une photo, modifiez-la dans votre dossier, téléchargez-la sur GitHub, et Vercel mettra à jour votre site automatiquement en 30 secondes.
- **Sécurité** : Ne donnez jamais votre `EMAIL_PASS` à personne.

*Celux Rénovation - Votre succès commence ici.*


                                /***************************/
                                ****/    BY EvolveD    /****
                                /***************************/